/**
*
* Tableschedules
*
*/

import React, { Component, PropTypes } from 'react';
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
    'date',
    'status',
    'ration',
    'group',
    'numberAnimals',
    'freshWeight',
    'freshWeightAll',
    'freshError',
    'dryWeight',
    'dryWeightAll',
    'dryError'
  ],
  tableTitle : 'Планування'
};

class TableSchedules extends Component {

  render() {
    const { tableData, tableHeaders, canChecked, onChangeCheckedRow, checked } = this.props;

    // console.log('TableSchedules | render | props ', this.props);

    return (
      <div className='table-schedules'>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages[item]} />))}
          options={{
            selectable : false,
            showCheckboxes : false,
            firstLineCheckbox: true
          }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} selected={row.selected} className='table-schedules__row'>
              {canChecked ? (<TableRowColumn className='table-td-width'>
                <Checkbox onCheck={(e) => onChangeCheckedRow(row.id, e)} checked={checked === row.id} />
              </TableRowColumn>) : null}
              <TableRowColumn>
                {row.planned}
              </TableRowColumn>
              <TableRowColumn>
                {row.status}
              </TableRowColumn>
              <TableRowColumn>
                {row.ration}
              </TableRowColumn>
              <TableRowColumn>
                {row.groups}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.count}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.weight}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.weightReal}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.weightDifference}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.dryWeight}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.dryWeightReal}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.dryWeightDifference}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
      </div>
    );
  }
}

TableSchedules.propTypes = propTypes;
TableSchedules.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableSchedules);
