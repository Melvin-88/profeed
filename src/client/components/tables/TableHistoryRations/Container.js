/**
 *
 * TableHistory
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import TableTemplate from 'client/shared/TableTemplate';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import DialogHistoryRationAdditional from 'client/components/dialogs/history/ration';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';
import { redA700, green800 } from 'material-ui/styles/colors';

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
    'extendInfo',
    'name',
    'fullName',
    'autoLoad',
    'autoSchedule',
    'coefficient',
    'user',
    'type',
    'date'
  ],
  tableData : []
};

class TableHistory extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open : false,
    dialogData : {
      loadingCounts : [],
      ingredients : [],
      groups : []
    }
  };

  handleDialogClose() {
    this.setState({
      open : false,
      dialogData : {
        loadingCounts : [],
        ingredients : [],
        groups : []
      }
    });
  }

  handleDialogOpen(row) {
    this.setState({
      open : true,
      dialogData : {
        loadingCounts : row.loading_counts,
        ingredients : row.ingredients,
        groups : row.groups
      }
    });
  }

  renderPermissionIcons(flag) {
    if (flag) {
      return <CheckCircle color={green800} />;
    }

    return <HighlightOff color={redA700} />;
  }

  render() {
    const { tableData, tableHeaders } = this.props;
    // console.log('TableHistoryFarms | render | props ', tableData, tableHeaders);

    return (
      <div className='TableHistoryRations'>
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
              <TableRowColumn className='content-center'>
                <IconButton onClick={() => this.handleDialogOpen(row)}>
                  <ContentAdd />
                </IconButton>
              </TableRowColumn>
              <TableRowColumn>
                {row.name}
              </TableRowColumn>
              <TableRowColumn>
                {row.full_name}
              </TableRowColumn>
              <TableRowColumn className='content-center'>
                {this.renderPermissionIcons(row.auto_load)}
              </TableRowColumn>
              <TableRowColumn  className='content-center'>
                {this.renderPermissionIcons(row.auto_schedule)}
              </TableRowColumn>
              <TableRowColumn className='content-right'>
                {row.coefficient}
              </TableRowColumn>
              <TableRowColumn>
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
        <DialogHistoryRationAdditional {...this.state.dialogData} onClose={::this.handleDialogClose}
          open={this.state.open}
        />
      </div>
    );
  }
}

TableHistory.propTypes = propTypes;
TableHistory.defaultProps = defaultProps;

export default TableHistory;
