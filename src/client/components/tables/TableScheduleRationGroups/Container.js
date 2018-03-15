/**
*
* TableRationGroups
*
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import TableTemplate from 'client/shared/TableTemplate';
import EditedCol from 'client/shared/EditedField';
import { showNumbers } from 'helpers/formatters';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import './style.css';

const propTypes = {
  farmId : React.PropTypes.string,
  tableData : React.PropTypes.array,
  tableHeaders : React.PropTypes.array,
  tableTitle : React.PropTypes.string,
  weight : React.PropTypes.number,
  dryWeight : React.PropTypes.number,
  rationCoefficient : React.PropTypes.number,
  saveEditedProperty : React.PropTypes.func
};

const defaultProps = {
  tableData : [],
  tableHeaders : [
    'animalGroup',
    'numberHeads',
    'coefficient',
    'freshWeight',
    'dryWeight',
    'allWeight'
  ]
};

class TableScheduleRationGroups extends Component { // eslint-disable-line react/prefer-stateless-function
  /**
   *
   * @param v
   * @param rowId
   * @param property
   */
  handleSaveResult(v, rowId, property) {
    const { saveEditedProperty } = this.props;

    saveEditedProperty(rowId, property, v);
  }

  /**
   *
   * @param v
   * @param rowId
   */
  handleSaveCoefficient(v, rowId) {
    this.handleSaveResult(v, rowId, 'coefficient');
  }

  /**
   *
   * @param v
   * @param rowId
   */
  handleSaveAnimalCount(v, rowId) {
    this.handleSaveResult(v, rowId, 'animalCount');
  }

  /**
   *
   * @param animalCount
   * @param weight
   * @param groupCoefficient
   * @param rationCoefficient
   * @return {number}
   */
  calculateWeight(animalCount, weight, groupCoefficient = 100, rationCoefficient = 100) {
    return +(+animalCount * +weight * +groupCoefficient * +rationCoefficient / (100 * 100)).toFixed(2);
  }

  /**
   *
   * @param v
   * @param coefficients
   * @return {number}
   */
  calculateValueWithCoefs(v, ...coefficients) {
    const totalCoeffs = coefficients.reduce((val, item) => val * (item / 100), 1);

    return +Number((v * totalCoeffs).toFixed(2));
  }

  render() {
    // console.log('TableScheduleRationGroups | render | props ', this.props);
    const { tableData, tableHeaders, weight, dryWeight, rationCoefficient } = this.props;

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
                <EditedCol value={row.animalCount} minValue={-1} maxValue={200}
                  onSaveValue={(v) => this.handleSaveAnimalCount(v, row.id)}
                />
              </TableRowColumn>
              <TableRowColumn>
                <EditedCol value={row.coefficient} minValue={-1} maxValue={200}
                  onSaveValue={(v) => this.handleSaveCoefficient(v, row.id)}
                />
              </TableRowColumn>
              <TableRowColumn>
                {showNumbers(weight)}
                ({this.calculateValueWithCoefs(+weight, row.coefficient, rationCoefficient)})*
              </TableRowColumn>
              <TableRowColumn>
                {showNumbers(dryWeight)}
                ({this.calculateValueWithCoefs(+dryWeight, row.coefficient, rationCoefficient)})*
              </TableRowColumn>
              <TableRowColumn>
                {this.calculateWeight(row.animalCount, weight)}
                ({this.calculateWeight(row.animalCount, weight, row.coefficient, rationCoefficient)})*
              </TableRowColumn>
            </TableRow>
          ))}
          <TableRow key={-1} className='table-ration-loadingcounts__row'>
            <TableRowColumn>
              Всього:
            </TableRowColumn>
            <TableRowColumn>
              {tableData.reduce((v, item) => v + +item.animalCount, 0)}
            </TableRowColumn>
            <TableRowColumn />
            <TableRowColumn />
            <TableRowColumn />
            <TableRowColumn>
              {tableData.reduce((v, item) => v +
              this.calculateWeight(item.animalCount, weight), 0)}
              ({tableData.reduce((v, item) => v +
              this.calculateWeight(item.animalCount, weight, item.coefficient, rationCoefficient), 0)})*
            </TableRowColumn>
          </TableRow>
        </TableTemplate>
        <p>
          {<FormattedMessage {...messages.note} />}
        </p>
      </div>
    );
  }
}

TableScheduleRationGroups.propTypes = propTypes;
TableScheduleRationGroups.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableScheduleRationGroups);
