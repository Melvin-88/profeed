/**
*
* TableRationIngredients
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
import DialogAdd from 'client/components/dialogs/rationingredients/DialogRationIngredientsAdd';
import DialogEdit from 'client/components/dialogs/rationingredients/DialogRationIngredientsEdit';
import DialogRemove from 'client/components/dialogs/rationingredients/DialogRationIngredientsRemove';
import EditedCol from 'client/shared/EditedField';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import './style.css';

const propTypes = {
  farmId : React.PropTypes.string,
  tableData : React.PropTypes.array,
  tableHeaders : React.PropTypes.array,
  tableTitle : React.PropTypes.string,
  ingredients : React.PropTypes.array,
  getIngredients : React.PropTypes.func,
  showTableRationIngredientsAddDialog : React.PropTypes.func,
  showTableRationIngredientsEditDialog : React.PropTypes.func,
  showTableRationIngredientsRemoveDialog : React.PropTypes.func,
  weight : React.PropTypes.number,
  saveEditedProperty : React.PropTypes.func,
  rawPartForCalculate : React.PropTypes.number
};

const defaultProps = {
  tableData : [],
  tableHeaders : [
    'checkbox',
    'name',
    'freshWeight',
    'dryWeight'
  ]
};

class TableRationIngredients extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      checkedRow : null
    };
  }

  componentDidMount() {
    const { getIngredients, farmId } = this.props;

    getIngredients(farmId);
  }

  handleCheckTableRow(row) {
    // console.log(loadingCount, event.target.checked); loadingCount
    this.setState({
      checkedRow : (this.state.checkedRow === row.id ? null : row.id)
    });
  }

  handleAddModal() {
    const { showTableRationIngredientsAddDialog } = this.props;

    showTableRationIngredientsAddDialog();
  }

  handleEditModal() {
    const { tableData, showTableRationIngredientsEditDialog } = this.props;
    const { checkedRow } = this.state;

    showTableRationIngredientsEditDialog(tableData.find((item) => item.id === checkedRow));
    this.setState({
      checkedRow : null
    });
  }

  handleRemoveModal() {
    const { tableData, showTableRationIngredientsRemoveDialog } = this.props;
    const { checkedRow } = this.state;

    showTableRationIngredientsRemoveDialog(tableData.find((item) => item.id === checkedRow));
    this.setState({
      checkedRow : null
    });
  }

  handleSaveResult(v, rowId) {
    const { saveEditedProperty } = this.props;

    saveEditedProperty(rowId, 'weight', v);
  }

  // filtered unused items for dialogs
  getItemsForDialogs(tableData, items = []) {
    return items.filter((v) => !tableData.find((v2) => v2.id === v.id));
  }

  render() {
    // console.log('TableRationIngredients | render | props ', this.props);
    const { tableData, tableHeaders, ingredients, rawPartForCalculate } = this.props;
    const { checkedRow } = this.state;

    const freeItemsForDialogs = this.getItemsForDialogs(tableData, ingredients);
    // TODO : rewrite bad isNaN

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
                <EditedCol value={row.weight} minValue={-1} maxValue={999}
                  onSaveValue={(v) => this.handleSaveResult(v, row.id)}
                />
                ({Number.isNaN(rawPartForCalculate) ? '--' : Number((row.weight * rawPartForCalculate).toFixed(2))})*
              </TableRowColumn>
              <TableRowColumn>
                {Number(((row.weight * row.dry_matter) / 100).toFixed(2))}
              </TableRowColumn>
            </TableRow>
          ))}
          <TableRow key={-1} className='table-ration-loadingcounts__row'>
            <TableRowColumn />
            <TableRowColumn>
              {<FormattedMessage {...messages.total} />}
            </TableRowColumn>
            <TableRowColumn>
              {tableData.reduce((v, item) => v + item.weight, 0)}
            </TableRowColumn>
            <TableRowColumn />
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
        <DialogAdd ingredients={freeItemsForDialogs} />
        <DialogEdit ingredients={freeItemsForDialogs} />
        <DialogRemove />
      </div>
    );
  }
}

TableRationIngredients.propTypes = propTypes;
TableRationIngredients.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableRationIngredients);
