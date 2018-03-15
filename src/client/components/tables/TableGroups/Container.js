/**
*
* TableGroups
*
*/

import React, { Component, PropTypes } from 'react';
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
    'groupsAnimal',
    'numberOfheads',
    'lactating'
  ],
  tableTitle : 'Групи'
};

class TableGroups extends Component {
  render() {
    const { tableData, tableHeaders, onChangeCheckedRow, checked, canChecked } = this.props;

    // console.log('TableGroups | render | props ', this.props);

    return (
      <div className='table-groups'>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => (<FormattedMessage key={i} {...messages[item]} />))}
          options={{
            selectable : false,
            showCheckboxes : false,
            firstLineCheckbox: true
          }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} className='table-groups__row'>
              <TableRowColumn className='table-td-width'>
                {canChecked ? (<Checkbox onCheck={() => onChangeCheckedRow(row.id)} checked={checked === row.id}/>) : null}
              </TableRowColumn>
              <TableRowColumn>
                {row.name}
              </TableRowColumn>
              <TableRowColumn className='align-right'>
                {row.animal_count}
              </TableRowColumn>
              <TableRowColumn>
                {row.lactating ? 'Так' : 'Ні'}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
      </div>
    );
  }
}

TableGroups.propTypes = propTypes;
TableGroups.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableGroups);
