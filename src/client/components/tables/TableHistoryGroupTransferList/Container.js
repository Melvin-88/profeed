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
import { TRANSFER_TYPES_ARR } from 'helpers/constants';

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
    'name',
    'transferType',
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
                {row.name}
              </TableRowColumn>
              <TableRowColumn>
                <FormattedMessage
                  {...messages.transferTypes[TRANSFER_TYPES_ARR.find(item => item.id === row.transfer_type).title]}
                />
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
