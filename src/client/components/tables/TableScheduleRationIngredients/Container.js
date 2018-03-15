/**
*
* TableScheduleRationIngredients
*
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import TableTemplate from 'client/shared/TableTemplate';
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
  showTableScheduleRationIngredientsAddDialog : React.PropTypes.func,
  showTableScheduleRationIngredientsEditDialog : React.PropTypes.func,
  showTableScheduleRationIngredientsRemoveDialog : React.PropTypes.func,
  weight : React.PropTypes.number,
  saveEditedProperty : React.PropTypes.func,
  rawPartForCalculate : React.PropTypes.number
};

const defaultProps = {
  tableData : [],
  tableHeaders : [
    'name',
    'freshWeight',
    'dryWeight',
    'price'
  ]
};

class TableScheduleRationIngredients extends Component { // eslint-disable-line react/prefer-stateless-function
  handleSaveResult(v, rowId) {
    const { saveEditedProperty } = this.props;

    saveEditedProperty(rowId, 'weight', v);
  }

  render() {
    // console.log('TableScheduleRationIngredients | render | props ', this.props);
    const { tableData, tableHeaders, rawPartForCalculate } = this.props;

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
              <TableRowColumn>
                {row.name}
              </TableRowColumn>
              <TableRowColumn>
                <EditedCol value={row.weight} minValue={-1} maxValue={999}
                  onSaveValue={(v) => this.handleSaveResult(v, row.id)}
                />
                ({Number((row.weight * rawPartForCalculate).toFixed(2))})*
              </TableRowColumn>
              <TableRowColumn>
                {Number(((row.weight * row.dryMatter) / 100).toFixed(2))}
              </TableRowColumn>
              <TableRowColumn>
                --- (NOT READY) ---
              </TableRowColumn>
            </TableRow>
          ))}
          <TableRow key={-1} className='table-ration-loadingcounts__row'>
            <TableRowColumn>
             Всього:
            </TableRowColumn>
            <TableRowColumn>
              {tableData.reduce((v, item) => v + item.weight, 0)}
            </TableRowColumn>
            <TableRowColumn />
            <TableRowColumn>
              --- (NOT READY) ---
            </TableRowColumn>
          </TableRow>
        </TableTemplate>
        <p>
          {<FormattedMessage {...messages.note} />}
        </p>
      </div>
    );
  }
}

TableScheduleRationIngredients.propTypes = propTypes;
TableScheduleRationIngredients.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableScheduleRationIngredients);
