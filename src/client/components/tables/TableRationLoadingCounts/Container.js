/**
*
* TableRationLoadingCounts
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
import DialogRationLoadingCountAdd from 'client/components/dialogs/rationloadingcounts/DialogRationLoadingCountsAdd';
import DialogRationLoadingCountEdit from 'client/components/dialogs/rationloadingcounts/DialogRationLoadingCountsEdit';
import DialogRationLoadingCountRemove from 'client/components/dialogs/rationloadingcounts/DialogRationLoadingCountsRemove';
import EditedCol from 'client/shared/EditedField';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import './style.css';

const propTypes = {
  farmId : React.PropTypes.string,
  tableData : React.PropTypes.array,
  tableHeaders : React.PropTypes.array,
  tableTitle : React.PropTypes.string,
  loadings : React.PropTypes.array,
  loadingCounts : React.PropTypes.array,
  mixers : React.PropTypes.array,
  setLoadings : React.PropTypes.func,
  getLoadingCounts : React.PropTypes.func,
  getMixers : React.PropTypes.func,
  showTableRationLoadingCountsAddDialog : React.PropTypes.func,
  showTableRationLoadingCountsEditDialog : React.PropTypes.func,
  showTableRationLoadingCountsRemoveDialog : React.PropTypes.func,
  saveEditedProperty : React.PropTypes.func,
  weight : React.PropTypes.number,
  weightWithTotalCoeffs : React.PropTypes.number,
  animalCount : React.PropTypes.number
};

const defaultProps = {
  tableData : [],
  tableHeaders : [
    'checkbox',
    'nameRation',
    'correlation',
    'weight',
    'mixer'
  ],
  tableTitle : 'Роздачі',
  loadingCounts : [],
  mixers : []
};

class TableRationLoadingCounts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedLoading : null,
      showedEditId : null,
      editInColVal : 0
    };
  }

  componentDidMount() {
    const { getLoadingCounts, getMixers, farmId } = this.props;

    getLoadingCounts(farmId);
    getMixers(farmId);
  }

  handleCheckLoadingCount(row) {
    // console.log(loadingCount, event.target.checked); loadingCount
    this.setState({
      checkedLoading : (this.state.checkedLoading === row.id ? null : row.id)
    });
  }

  handleSaveResult(v, rowId) {
    const { saveEditedProperty } = this.props;

    saveEditedProperty(rowId, 'coefficient', v);
  }

  handleAddModal() {
    const { showTableRationLoadingCountsAddDialog } = this.props;

    showTableRationLoadingCountsAddDialog();
  }

  handleEditModal() {
    const { tableData, showTableRationLoadingCountsEditDialog } = this.props;
    const { checkedLoading } = this.state;

    showTableRationLoadingCountsEditDialog(tableData.find((item) => item.id === checkedLoading));
    this.setState({
      checkedLoading : null
    });
  }

  handleRemoveModal() {
    const { tableData, showTableRationLoadingCountsRemoveDialog } = this.props;
    const { checkedLoading } = this.state;

    showTableRationLoadingCountsRemoveDialog(tableData.find((item) => item.id === checkedLoading));
    this.setState({
      checkedLoading : null
    });
  }

  // filtered unused loadings for dialogs
  getLoadingCountsForDialogs(tableData, loadingCounts) {
    return loadingCounts.filter((v) => !tableData.find((v2) => v2.id === v.id));
  }

  getFreePercent(tableData) {
    return 100 - tableData.map((v) => v.coefficient).reduce((prev, next) => prev + next, 0);
  }

  render() {
    // TODO : edit mixer property
    // console.log('TableRationLoadingCounts | render | props ', this.props);
    const { tableData, tableHeaders, mixers, loadingCounts, weight, weightWithTotalCoeffs, animalCount } = this.props;
    const { checkedLoading } = this.state;

    const freeLoadings = this.getLoadingCountsForDialogs(tableData, loadingCounts);
    const freePercents = this.getFreePercent(tableData);

    // TODO : rewrite render for weightWithTotalCoeffs = 0
    return (
      <div className='table-ration-loadingcounts'>
        <div className='table__table-header__title'>
          <h1>
            { <FormattedMessage {...messages.title} />}
          </h1>
        </div>

        <br/>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages.headers[item]} />))}
          options={{ selectable : false, showCheckboxes : false }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} className='table-ration-loadingcounts__row'>
              <TableRowColumn className='table-td-width'>
                <Checkbox onCheck={(e) => this.handleCheckLoadingCount(row, e)} checked={checkedLoading === row.id}/>
              </TableRowColumn>
              <TableRowColumn>
                {row.name}
              </TableRowColumn>
              <TableRowColumn>
                <EditedCol value={row.coefficient} minValue={-1} maxValue={freePercents + row.coefficient}
                  onSaveValue={(v) => this.handleSaveResult(v, row.id)}
                />
              </TableRowColumn>
              <TableRowColumn>
                {Number((row.coefficient * weight * animalCount / 100).toFixed(2))}
                ({weightWithTotalCoeffs ? Number((weightWithTotalCoeffs * row.coefficient / 100).toFixed(2)) : '--'})*
              </TableRowColumn>
              <TableRowColumn>
                {(mixers.find((item) => item.id === row.mixer) || {}).name}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
        <p>
          { <FormattedMessage {...messages.note} />}
        </p>
        <RaisedButton
          className={`ration-page-button ${freeLoadings.length === 0 ? '' : 'button-add'}`}
          label={<FormattedMessage {...messages.button.add} />}
          primary
          disabled={freeLoadings.length === 0}
          onTouchTap={::this.handleAddModal}
        />
        <RaisedButton
          className={`ration-page-button ${checkedLoading ? 'button-edit' : ''}`}
          label={<FormattedMessage {...messages.button.edit} />}
          onTouchTap={::this.handleEditModal}
          disabled={!checkedLoading}
        />
        <RaisedButton
          className={`ration-page-button ${checkedLoading ? 'button-remove' : ''}`}
          label={<FormattedMessage {...messages.button.remove} />}
          onTouchTap={::this.handleRemoveModal}
          disabled={!checkedLoading}
        />
        <DialogRationLoadingCountAdd loadingCounts={freeLoadings} mixers={mixers} freePercents={freePercents}/>
        <DialogRationLoadingCountEdit loadingCounts={freeLoadings} mixers={mixers} freePercents={freePercents}/>
        <DialogRationLoadingCountRemove />
      </div>
    );
  }
}

TableRationLoadingCounts.propTypes = propTypes;
TableRationLoadingCounts.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableRationLoadingCounts);
