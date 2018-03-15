/**
*
* TableIngredients
*
*/

import React, { Component, PropTypes } from 'react';
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
    'name',
    'dryMatter'
  ],
  tableTitle : 'Інгредієнти'
};

class TableIngredients extends Component {
  render() {
    const { tableData, tableHeaders, onChangeCheckedRow, checked, canChecked } = this.props;

    return (
      <TableTemplate
        tableHeaders={tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages[item]} />))}
        options={{
          selectable : false,
          showCheckboxes : false,
          firstLineCheckbox: true
        }}
      >
        {tableData.map((row, index) => (
          <TableRow key={index} selected={row.selected} className='table-ingredients__row'>
            <TableRowColumn className='table-td-width'>
              {canChecked ? <Checkbox onCheck={() => onChangeCheckedRow(row.id)} checked={checked === row.id}/> : null}
            </TableRowColumn>
            <TableRowColumn>
              {row.name}
            </TableRowColumn>
            <TableRowColumn className='align-right'>
              {row.dry_matter}
            </TableRowColumn>
          </TableRow>
        ))}
      </TableTemplate>
    );
  }
}

TableIngredients.propTypes = propTypes;
TableIngredients.defaultProps = defaultProps;

export default TableIngredients;

