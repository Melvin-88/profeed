/**
 *
 * TableLoadingCounts
 *
 */

import React, { Component, PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import TableTemplate from 'client/shared/TableTemplate';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const propTypes = {
  tableData: PropTypes.array,
  tableHeaders: PropTypes.array,
  tableTitle: PropTypes.string,
  onChangeCheckedRow: PropTypes.func,
  checked : PropTypes.number,
  canChecked : PropTypes.bool
};
const defaultProps = {
  tableHeaders: [
    'checkbox',
    'name',
    'turn'
  ],
  tableData: []
};

class TableMixers extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { tableHeaders, tableData, checked, onChangeCheckedRow, canChecked } = this.props;

    return (
      <div className='table-mixers'>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages[item]} />))}
          options={{
            selectable: false,
            showCheckboxes: false,
            firstLineCheckbox: true
          }}
        >
          {tableData.sort((a, b) => a.ordering <= b.ordering ? -1 : 1).map((row, index) => (
            <TableRow key={index} className='table-row'>
              <TableRowColumn className='table-td-width'>
                {canChecked ? (<Checkbox onCheck={() => onChangeCheckedRow(row.id)} checked={checked === row.id}/>) : null}
              </TableRowColumn>
              <TableRowColumn>
                {row.name}
              </TableRowColumn>
              <TableRowColumn>
                {row.ordering + 1}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
      </div>
    );
  }
}

TableMixers.propTypes = propTypes;
TableMixers.defaultProps = defaultProps;

export default TableMixers;
