/**
*
* TableUserReports
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
    'groups',
    'reports'
  ]
};

class TableUserReports extends Component {
  render() {
    const { tableData, tableHeaders, checked, onChangeCheckedRow, canChecked } = this.props;

    // console.log('TableUserReports | render | props ', this.props);

    return (
      <div className='table-groups'>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages[item]} />))}
          options={{ selectable : false,
            showCheckboxes : false,
            firstLineCheckbox: true
          }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} selected={row.selected} className='table-groups__row'>
              <TableRowColumn className='table-td-width'>
                {canChecked ? <Checkbox onCheck={() => onChangeCheckedRow(row.id)} checked={checked === row.id}/> : null}
              </TableRowColumn>
              <TableRowColumn>
                {row.groupName}
              </TableRowColumn>
              <TableRowColumn>
                <table>
                  <thead>
                    <tr>
                      <th><FormattedMessage {...messages.name} /></th>
                      <th><FormattedMessage {...messages.worksheets} /></th>
                    </tr>
                  </thead>
                  <tbody>
                    {row.reports.map((item, i) => {
                      return (<tr key={i}>
                        <td>
                          {item.name}
                        </td>
                        <td>
                          {item.worksheets.map(worksheet => worksheet.name)}
                        </td>
                      </tr>);
                    })}
                  </tbody>
                </table>
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
      </div>
    );
  }
}

TableUserReports.propTypes = propTypes;
TableUserReports.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableUserReports);
