/**
 *
 * TableHistoryFarms
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import TableTemplate from 'client/shared/TableTemplate';
import moment from 'moment';
import { TIMEZONES, LANGUAGES } from 'helpers/constants';
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
    'name',
    'language',
    'timezone',
    'user',
    'type',
    'date'
  ]
};

class TableHistoryFarms extends Component { // eslint-disable-line react/prefer-stateless-function
  renderLanguage(languages, language) {
    const lang = languages.find(item => item.title === language);

    return lang ? lang.title : '--';
  }

  renderTimezone(timezones, timezone) {
    const tz = timezones.find(item => item.tz === timezone);

    return tz ? tz.tz : '--';
  }

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
                {this.renderLanguage(LANGUAGES, row.settings.language)}
              </TableRowColumn>
              <TableRowColumn>
                {this.renderTimezone(TIMEZONES, row.settings.timezone)}
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

TableHistoryFarms.propTypes = propTypes;
TableHistoryFarms.defaultProps = defaultProps;

export default TableHistoryFarms;
