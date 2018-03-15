/**
  *
  * TableRationLoadingCounts
  *
  */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import TableTemplate from 'client/shared/TableTemplate';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import './style.css';

const propTypes = {
  farmId : React.PropTypes.string,
  tableData : React.PropTypes.array,
  tableHeaders : React.PropTypes.array,
  tableTitle : React.PropTypes.string,
  weight : React.PropTypes.number,
  weightWithTotalCoeffs : React.PropTypes.number,
  animalCount : React.PropTypes.number,
  mixers : React.PropTypes.array,
  saveEditedProperty : React.PropTypes.func,
  getMixers : React.PropTypes.func
};

const defaultProps = {
  tableData : [],
  tableHeaders : [
    'name',
    'coefficient',
    'weight',
    'mixer'
  ],
  tableTitle : 'Роздачі'
};

class TableScheduleRationLoadingCounts extends Component {
  componentDidMount() {
    const { getMixers, farmId } = this.props;

    getMixers(farmId);
  }

  /**
   *
   * @param event
   * @param index
   * @param value
   */
  handleChangeMixer(event, index, value) {
    const { saveEditedProperty } = this.props;

    saveEditedProperty(null, 'scheduleMixer', value);
  }

  render() {
    // console.log('TableScheduleRationLoadingCounts | render | props ', this.props);
    const { tableData, tableHeaders, weight, weightWithTotalCoeffs, animalCount, mixers } = this.props;

    return (
      <div className='table-ration-loadingcounts'>
        <div className='table__table-header__title'>
          <h1>
            {<FormattedMessage {...messages.title} />}
          </h1>
        </div>

        <br/>
        <TableTemplate
          tableHeaders={
            tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages.headers[item]} />))
          }
          options={{ selectable : false, showCheckboxes : false }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} className='table-ration-loadingcounts__row'>
              <TableRowColumn>
                {row.name}
              </TableRowColumn>
              <TableRowColumn>
                {row.coefficient}
              </TableRowColumn>
              <TableRowColumn>
                {Number((row.coefficient * weight * animalCount / 100).toFixed(2))}
                ({Number((weightWithTotalCoeffs * row.coefficient / 100).toFixed(2))})*
              </TableRowColumn>
              <TableRowColumn>
                <SelectField
                  className='dialog-form__input'
                  value={row.scheduleMixer}
                  onChange={::this.handleChangeMixer}
                >
                  { mixers.map((item, key) => {
                    return <MenuItem key={key} value={item.id} primaryText={item.name} />;
                  })}
                </SelectField>
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
        <p>
          {<FormattedMessage {...messages.note} />}
        </p>
      </div>
    );
  }
}

TableScheduleRationLoadingCounts.propTypes = propTypes;
TableScheduleRationLoadingCounts.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableScheduleRationLoadingCounts);
