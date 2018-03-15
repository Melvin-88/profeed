/**
*
* TableCustomers
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
    'farm',
    'group',
    'note'
  ],
  tableTitle : ''
};

class TableCustomers extends Component {
  renderFarms(farms) {
    return farms.map((item) => item.name).join(', ');
  }

  renderUserGroups(groups) {
    return groups.map((item) => item.name).join(', ');
  }

  render() {
    const { tableData, tableHeaders, tableTitle, checked, onChangeCheckedRow, canChecked } = this.props;

    console.log('TableCustomers | render | props ', this.props);

    return (
      <div className='table-customers'>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages[item]} />))}
          tableTitle={tableTitle}
          options={{
            selectable : false,
            showCheckboxes : false,
            firstLineCheckbox: true
          }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} selected={row.selected} className='table-customers__row'>
              <TableRowColumn className='table-td-width'>
                {canChecked ? <Checkbox onCheck={() => onChangeCheckedRow(row.id)} checked={checked === row.id}/> : null}
              </TableRowColumn>
              <TableRowColumn>
                {row.username}
              </TableRowColumn>
              <TableRowColumn>
                {this.renderFarms(row.farms)}
              </TableRowColumn>
              <TableRowColumn>
                {this.renderUserGroups(row.groups)}
              </TableRowColumn>
              <TableRowColumn>
                {row.about}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
      </div>
    );
  }
}

TableCustomers.propTypes = propTypes;
TableCustomers.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableCustomers);
