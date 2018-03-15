/**
 *
 * TableHistory
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import TableTemplate from 'client/shared/TableTemplate';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
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
    'name',
    'coefficient',
    'animalCount',
    'lactating',
    'ordering',
    'plannedWeight',
    'plannedWeightDm',
    'type'
  ]
};

class TableHistory extends Component { // eslint-disable-line react/prefer-stateless-function
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
      <div>
        <h3><FormattedMessage {...messages.title}/></h3>
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
              <TableRowColumn className='content-right'>
                {row.coefficient}
              </TableRowColumn>
              <TableRowColumn className='content-right'>
                {row.animal_count}
              </TableRowColumn>
              <TableRowColumn className='content-center'>
                {this.renderPermissionIcons(row.lactating)}
              </TableRowColumn>
              <TableRowColumn className='content-right'>
                {row.ordering}
              </TableRowColumn>
              <TableRowColumn className='content-right'>
                {row.planned_weight}
              </TableRowColumn>
              <TableRowColumn className='content-right'>
                {row.planned_weight_dm}
              </TableRowColumn>
              <TableRowColumn>
                <FormattedMessage {...messages.typeAction[row.history_type]}/>
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
