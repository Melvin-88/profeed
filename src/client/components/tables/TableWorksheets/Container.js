/**
*
* TableWorksheets
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import TableTemplate from 'client/shared/TableTemplate';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const propTypes = {
  tableData : PropTypes.array,
  tableHeaders : PropTypes.array,
  tableTitle : PropTypes.string,
  onChangeCheckedRow : PropTypes.func,
  checked : PropTypes.number,
  canChecked : PropTypes.bool
};
const defaultProps = {
  tableData : [],
  tableHeaders : [
    'checkbox',
    'name',
    'companyName',
    'indCode',
    'structureName',
    'farmFullName',
    'appoint',
    'structureManager',
    'farmManager',
    'zootechnics',
    'accountant',
    'weigher'
  ],
  tableTitle : 'Worksheets'
};

class TableWorksheets extends Component {
  render() {
    const { tableData, tableHeaders, checked, onChangeCheckedRow, canChecked } = this.props;

    // console.log('TableWorksheets | render | props ', this.props);

    return (
      <div className='table-worksheets'>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages[item]} />))}
          options={{ selectable : false,
            showCheckboxes : false,
            firstLineCheckbox: true
          }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} selected={row.selected} className='table-worksheets__row'>
              <TableRowColumn className='table-td-width'>
                {canChecked ? <Checkbox onCheck={() => onChangeCheckedRow(row.id)} checked={checked === row.id}/> : null}
              </TableRowColumn>
              <TableRowColumn>
                {row.name}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.companyName}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.indCode}
              </TableRowColumn>
              <TableRowColumn>
                {row.structureName}
              </TableRowColumn>
              <TableRowColumn>
                {row.farmFullName}
              </TableRowColumn>
              <TableRowColumn>
                {row.appoint}
              </TableRowColumn>
              <TableRowColumn>
                {row.structureManager}
              </TableRowColumn>
              <TableRowColumn>
                {row.farmManager}
              </TableRowColumn>
              <TableRowColumn>
                {row.zootechnics}
              </TableRowColumn>
              <TableRowColumn>
                {row.accountant}
              </TableRowColumn>
              <TableRowColumn>
                {row.weigher}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
      </div>
    );
  }
}

TableWorksheets.propTypes = propTypes;
TableWorksheets.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableWorksheets);
