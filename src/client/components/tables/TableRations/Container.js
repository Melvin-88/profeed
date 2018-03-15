/**
 *
 * TableRations
 *
 */

import React, { Component, PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import TableTemplate from 'client/shared/TableTemplate';
import { elsSplittedByComa } from 'helpers/formatters';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const propTypes = {
  tableData: PropTypes.array,
  tableHeaders: PropTypes.array,
  tableTitle: PropTypes.string,
  onChangeCheckedRow: PropTypes.func,
  canChecked : PropTypes.bool,
  checked : PropTypes.number
};
const defaultProps = {
  tableData: [],
  tableHeaders: [
    'checkbox',
    'name',
    'animalsGroup',
    'headNum',
    'ingredients',
    'coefficient',
    'freshWeight',
    'freshWeightHead',
    'dryWeight',
    'numberDistribution',
    'price',
    'mixer'
  ]
};

class TableRations extends Component { // eslint-disable-line react/prefer-stateless-function

  calculateWeightPerOne(ingredients) {
    return ingredients.reduce((v, item) => v + item.weight, 0);
  }

  calculateDryWeightPerOne(ingredients) {
    const result = ingredients.reduce((v, item) => v + (item.weight * item.dry_matter / 100), 0);

    return Number(result).toFixed(2);
  }

  calculateWeightRation(ingredients, groups) {
    const weightPerOne = this.calculateWeightPerOne(ingredients);

    return groups.reduce((v, item) => v + item.animal_count * weightPerOne, 0);
  }

  renderIngredients(ingredients) {
    return elsSplittedByComa(ingredients, 'name');
  }

  renderLoadingCounts(loadingCounts) {
    return elsSplittedByComa(loadingCounts, 'name');
  }

  renderGroups(groups) {
    return elsSplittedByComa(groups, 'name');
  }

  renderMixers(mixers) {
    return elsSplittedByComa(mixers, 'mixer');
  }

  render() {
    const { tableHeaders, tableData, canChecked, checked, onChangeCheckedRow } = this.props;

    return (
      <div className='table-rations'>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages[item]} />))}
          options={{
            selectable: false,
            showCheckboxes: false,
            firstLineCheckbox: true
          }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} className='table-rations__row'>
              <TableRowColumn className='table-td-width'>
                {canChecked ? <Checkbox onCheck={() => onChangeCheckedRow(row.id)} checked={checked === row.id}/> : null}
              </TableRowColumn>
              <TableRowColumn>
                {row.name || 0}
              </TableRowColumn>
              <TableRowColumn>
                {this.renderGroups(row.groups)}
              </TableRowColumn>
              <TableRowColumn>
                {row.animalCount || 'TEST'}
              </TableRowColumn>
              <TableRowColumn>
                {this.renderIngredients(row.ingredients)}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.coefficient || 0}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {this.calculateWeightRation(row.ingredients, row.groups)}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {this.calculateWeightPerOne(row.ingredients)}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {this.calculateDryWeightPerOne(row.ingredients)}
              </TableRowColumn>
              <TableRowColumn>
                {this.renderLoadingCounts(row.loading_counts)}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.price_per_one || 0}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {this.renderMixers(row.loading_counts)}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
      </div>
    );
  }
}

TableRations.propTypes = propTypes;
TableRations.defaultProps = defaultProps;

export default TableRations;
