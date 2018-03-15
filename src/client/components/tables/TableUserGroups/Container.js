/**
 *
 * TableUserGroups
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import TableTemplate from 'client/shared/TableTemplate';
import PermissionsDisplay from 'client/shared/PermissionsDisplay';
import './style.css';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const propTypes = {
  tableData: PropTypes.array,
  tableHeaders: PropTypes.array,
  tableTitle: PropTypes.string,
  onChangeCheckedRow: PropTypes.func,
  checked : PropTypes.number,
  onEditPermission : PropTypes.func,
  canChecked : PropTypes.bool
};
const defaultProps = {
  tableData: [],
  tableHeaders: [
    'checkbox',
    'id',
    'name',
    'owner',
    'permits'
  ]
};

class TableUserGroups extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { tableHeaders, tableData, checked, onChangeCheckedRow, onEditPermission, canChecked } = this.props;

    return (
      <div className='table-user-groups'>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages[item]} />))}
          options={{
            selectable: false,
            showCheckboxes: false,
            firstLineCheckbox: true
          }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} className='table-row'>
              <TableRowColumn className='table-td-width'>
                {canChecked ? <Checkbox onCheck={() => onChangeCheckedRow(row.id)} checked={checked === row.id}/> : null}
              </TableRowColumn>
              <TableRowColumn>
                {row.id || 0}
              </TableRowColumn>
              <TableRowColumn>
                {row.name || ''}
              </TableRowColumn>
              <TableRowColumn>
                {row.owner || ''}
              </TableRowColumn>
              <TableRowColumn className='column-user-groups'>
                <PermissionsDisplay permissions={row.settings} onEditPermission={() => onEditPermission(row.id)}/>
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
      </div>
    );
  }
}

TableUserGroups.propTypes = propTypes;
TableUserGroups.defaultProps = defaultProps;

export default TableUserGroups;
