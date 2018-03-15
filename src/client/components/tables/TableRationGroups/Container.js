/**
*
* TableRationGroups
*
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import TableTemplate from 'client/shared/TableTemplate';
import RaisedButton from 'material-ui/RaisedButton';
import DialogAdd from 'client/components/dialogs/rationgroups/DialogRationGroupsAdd';
import DialogEdit from 'client/components/dialogs/rationgroups/DialogRationGroupsEdit';
import DialogRemove from 'client/components/dialogs/rationgroups/DialogRationGroupsRemove';
import EditedCol from 'client/shared/EditedField';
import { showNumbers } from 'helpers/formatters';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import './style.css';

const propTypes = {
  farmId : React.PropTypes.string,
  tableData : React.PropTypes.array,
  tableHeaders : React.PropTypes.array,
  tableTitle : React.PropTypes.string,
  groups : React.PropTypes.array,
  getGroups : React.PropTypes.func,
  showTableRationGroupsAddDialog : React.PropTypes.func,
  showTableRationGroupsEditDialog : React.PropTypes.func,
  showTableRationGroupsRemoveDialog : React.PropTypes.func,
  weight : React.PropTypes.number,
  dryWeight : React.PropTypes.number,
  rationCoefficient : React.PropTypes.number,
  saveEditedProperty : React.PropTypes.func
};

const defaultProps = {
  tableData : [],
  tableHeaders : [
    'checkbox',
    'animalGroup',
    'numberHeads',
    'coefficient',
    'freshWeight',
    'dryWeight',
    'allWeight'
  ]
};

class TableRationGroups extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      checkedRow : null
    };
  }

  componentDidMount() {
    const { getGroups, farmId } = this.props;

    getGroups(farmId);
  }

  handleCheckTableRow(row) {
    // console.log(loadingCount, event.target.checked); loadingCount
    this.setState({
      checkedRow : (this.state.checkedRow === row.id ? null : row.id)
    });
  }

  handleAddModal() {
    const { showTableRationGroupsAddDialog } = this.props;

    showTableRationGroupsAddDialog();
  }

  handleEditModal() {
    const { tableData, showTableRationGroupsEditDialog } = this.props;
    const { checkedRow } = this.state;

    showTableRationGroupsEditDialog(tableData.find((item) => item.id === checkedRow));
    this.setState({
      checkedRow : null
    });
  }

  handleRemoveModal() {
    const { tableData, showTableRationGroupsRemoveDialog } = this.props;
    const { checkedRow } = this.state;

    showTableRationGroupsRemoveDialog(tableData.find((item) => item.id === checkedRow));
    this.setState({
      checkedRow : null
    });
  }

  handleSaveResult(v, rowId) {
    const { saveEditedProperty } = this.props;

    saveEditedProperty(rowId, 'coefficient', v);
  }

  // filtered unused items for dialogs
  getItemsForDialogs(tableData, items = []) {
    return items.filter((v) => !tableData.find((v2) => v2.id === v.id));
  }

  calculateWeight(animalCount, weight, groupCoefficient = 100, rationCoefficient = 100) {
    return +(+animalCount * +weight * +groupCoefficient * +rationCoefficient / (100 * 100)).toFixed(2);
  }

  calculateValueWithCoefs(v, ...coefficients) {
    const totalCoeffs = coefficients.reduce((val, item) => val * (item / 100), 1);

    // TODO : rewrite bad return
    return Number.isNaN(totalCoeffs) ? '--' : +Number((v * totalCoeffs).toFixed(2));
  }

  render() {
    // console.log('TableRationGroups | render | props ', this.props);
    const { tableData, tableHeaders, groups, weight, dryWeight, rationCoefficient } = this.props;
    const { checkedRow } = this.state;

    const freeItemsForDialogs = this.getItemsForDialogs(tableData, groups);

    return (
      <div className='table-ration-loadingcounts'>
        <div className='table__table-header__title'>
          <h1>
            {<FormattedMessage {...messages.title} />}
          </h1>
        </div>
        <br/>
        <TableTemplate
          tableHeaders={
            tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages.headers[item]} />))
          }
          options={{ selectable : false, showCheckboxes : false }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} className='table-ration-loadingcounts__row'>
              <TableRowColumn className='table-td-width'>
                <Checkbox onCheck={(e) => this.handleCheckTableRow(row, e)} checked={checkedRow === row.id}/>
              </TableRowColumn>
              <TableRowColumn>
                {row.name}
              </TableRowColumn>
              <TableRowColumn>
                {row.animal_count}
              </TableRowColumn>
              <TableRowColumn>
                <EditedCol value={row.coefficient} minValue={-1} maxValue={200}
                  onSaveValue={(v) => this.handleSaveResult(v, row.id)}
                />
              </TableRowColumn>
              <TableRowColumn>
                {showNumbers(weight)}
                ({this.calculateValueWithCoefs(+weight, row.coefficient, rationCoefficient)})*
              </TableRowColumn>
              <TableRowColumn>
                {showNumbers(dryWeight)}
                ({this.calculateValueWithCoefs(+dryWeight, row.coefficient, rationCoefficient)})*
              </TableRowColumn>
              <TableRowColumn>
                {this.calculateWeight(row.animal_count, weight)}
                ({this.calculateWeight(row.animal_count, weight, row.coefficient, rationCoefficient)})*
              </TableRowColumn>
            </TableRow>
          ))}
          <TableRow key={-1} className='table-ration-loadingcounts__row'>
            <TableRowColumn />
            <TableRowColumn>
              {<FormattedMessage {...messages.total} />}
            </TableRowColumn>
            <TableRowColumn>
              {tableData.reduce((v, item) => v + +item.animal_count, 0)}
            </TableRowColumn>
            <TableRowColumn />
            <TableRowColumn />
            <TableRowColumn />
            <TableRowColumn>
              {tableData.reduce((v, item) => v +
              this.calculateWeight(item.animal_count, weight), 0)}
              ({tableData.reduce((v, item) => v +
              this.calculateWeight(item.animal_count, weight, item.coefficient, rationCoefficient), 0)})*
            </TableRowColumn>
          </TableRow>
        </TableTemplate>
        <p>
          {<FormattedMessage {...messages.note} />}
        </p>
        <RaisedButton
          className={`ration-page-button ${freeItemsForDialogs.length === 0 ? '' : 'button-add'}`}
          label={<FormattedMessage {...messages.button.add} />}
          primary
          disabled={freeItemsForDialogs.length === 0}
          onTouchTap={::this.handleAddModal}
        />
        <RaisedButton
          className={`ration-page-button ${checkedRow ? 'button-edit' : ''}`}
          label={<FormattedMessage {...messages.button.edit} />}
          onTouchTap={::this.handleEditModal}
          disabled={!checkedRow}
        />
        <RaisedButton
          className={`ration-page-button ${checkedRow ? 'button-remove' : ''}`}
          label={<FormattedMessage {...messages.button.remove} />}
          onTouchTap={::this.handleRemoveModal}
          disabled={!checkedRow}
        />
        <DialogAdd groups={freeItemsForDialogs} />
        <DialogEdit groups={freeItemsForDialogs} />
        <DialogRemove />
      </div>
    );
  }
}

TableRationGroups.propTypes = propTypes;
TableRationGroups.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableRationGroups);
