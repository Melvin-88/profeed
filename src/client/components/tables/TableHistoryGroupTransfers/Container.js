/**
 *
 * TableHistory
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import TableTemplate from 'client/shared/TableTemplate';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const propTypes = {
  tableData: PropTypes.array,
  tableHeaders: PropTypes.array,
  tableTitle: PropTypes.string,
  onRemoveFarm: PropTypes.func,
  onEditFarm: PropTypes.func,
  onGoToFarm: PropTypes.func,
  buttons: PropTypes.object
};
const defaultProps = {
  tableHeaders: [
    'worker',
    'groupName',
    'transferListName',
    'animalCount',
    'group2Name',
    'createdAt',
    'user',
    'type',
    'date'
  ]
};

class TableHistory extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { tableData, tableHeaders } = this.props;
    // console.log('TableHistoryFarms | render | props ', tableData, tableHeaders);

    return (
      <div>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages[item]} />))}
          options={{
            selectable: false,
            showCheckboxes: false,
            firstLineCheckbox: false
          }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableRowColumn>
                {row.worker}
              </TableRowColumn>
              <TableRowColumn>
                {row.group_name}
              </TableRowColumn>
              <TableRowColumn>
                {row.transfer_list_name}
              </TableRowColumn>
              <TableRowColumn className='content-right'>
                {row.animal_count}
              </TableRowColumn>
              <TableRowColumn>
                {row.group2_name ? row.group2_name : '--'}
              </TableRowColumn>
              <TableRowColumn>
                {moment(new Date(row.created_at)).format('DD-MM-YYYY HH:mm')}
              </TableRowColumn>
              <TableRowColumn >
                {row.history_user}
              </TableRowColumn>
              <TableRowColumn>
                <FormattedMessage {...messages.typeAction[row.history_type]}/>
              </TableRowColumn>
              <TableRowColumn >
                {moment(new Date(row.history_date)).format('DD-MM-YYYY HH:mm')}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
      </div>
    );
  }
}

TableHistory.propTypes = propTypes;
TableHistory.defaultProps = defaultProps;

export default TableHistory;
