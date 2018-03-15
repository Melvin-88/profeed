/**
*
* TableTransfers
*
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
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
    'group',
    'typeTransfer',
    'quantity',
    'date'
  ],
  tableTitle : 'Переведення'
};

class TableTransfers extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { tableData, tableHeaders } = this.props;

    // console.log('TableTransfers | render | props ', this.props);

    return (
      <div className='table-groups'>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages[item]} />))}
          options={{ selectable : false,
            showCheckboxes : false,
            firstLineCheckbox: false
          }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} className='table-groups__row'>
              <TableRowColumn>
                {row.group_name}
              </TableRowColumn>
              <TableRowColumn>
                {row.transfer_list_name}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.animal_count}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {Moment(row.created_at).format('DD/MM/YYYY HH:mm')}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
      </div>
    );
  }
}

TableTransfers.propTypes = propTypes;
TableTransfers.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableTransfers);
