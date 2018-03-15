/**
*
* TableAnimalfeeds
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import TableTemplate from 'client/shared/TableTemplate';

const propTypes = {
  tableData : PropTypes.array,
  tableHeaders : PropTypes.array,
  tableTitle : PropTypes.string,
  onChangeCheckedRow : PropTypes.func,
  checked : PropTypes.number,
  canChecked : PropTypes.bool,
  ingredients : PropTypes.array,
  farmId : PropTypes.string,
  callGetIngredients : PropTypes.func
};
const defaultProps = {
  tableHeaders : [
    '',
    'name',
    'ingredients'
  ]
};

class TableAnimalfeeds extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { callGetIngredients, farmId } = this.props;

    callGetIngredients(farmId);
  }

  renderArrayItems(items) {
    console.log('TableAnimalfeeds | renderArrayItems | items : ', items);

    return items.map((item, i) => {
      return <div key={i}>{item.ingredient_name} : <span>{item.percent}[%]</span></div>;
    });
  }

  render() {
    const { tableData, tableHeaders, onChangeCheckedRow, checked, canChecked } = this.props;

    console.log('TableAnimalfeeds | render | tableData : ', tableData);

    return (
      <div>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => !!item ? (<FormattedMessage key={i} {...messages[item]} />) : null)}
          options={{
            selectable: false,
            showCheckboxes: false,
            firstLineCheckbox: true
          }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableRowColumn className='table-td-width'>
                {canChecked ? <Checkbox onCheck={() => onChangeCheckedRow(row.id)} checked={checked === row.id}/> : null}
              </TableRowColumn>
              <TableRowColumn>
                {row.ingredient_name}
              </TableRowColumn>
              <TableRowColumn>
                {this.renderArrayItems(row.ingredients)}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
      </div>
    );
  }
}

TableAnimalfeeds.propTypes = propTypes;
TableAnimalfeeds.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableAnimalfeeds);
