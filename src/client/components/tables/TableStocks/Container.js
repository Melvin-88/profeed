/**
*
* TableStocks
*
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import TableTemplate from 'client/shared/TableTemplate';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const propTypes = {
  tableData : PropTypes.array,
  tableHeaders : PropTypes.array,
  tableTitle : PropTypes.string
};
const defaultProps = {
  tableData : [],
  tableHeaders : [
    'ingredient',
    'dailyIntake',
    'remainingDays',
    'theBalanceInStockKg',
    'theBalanceInDtock'
  ],
  tableTitle : ''
};

/*
 "ingredient": 3,
 "total_amount": 0.0,
 "total_price": "0.00",
 "daily_expenditure": 0,
 "remaining_days": 0
*/

class TableStocks extends Component {


  render() {
    const { tableData, tableHeaders, tableTitle } = this.props;

    // console.log('TableStocks | render | props ', this.props);

    return (
      <div className='table-stocks'>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages[item]} />))}
          tableTitle={tableTitle}
          options={{ selectable : false,
            showCheckboxes : false,
            firstLineCheckbox: false
          }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} selected={row.selected} className='table-stocks__row'>
              <TableRowColumn>
                {row.name}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.daily_expenditure}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.remaining_days}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.total_amount}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.total_price}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
      </div>
    );
  }
}

TableStocks.propTypes = propTypes;
TableStocks.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableStocks);
