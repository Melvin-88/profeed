/**
*
* TableFarms
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import messages from './messages';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import TableTemplate from 'client/shared/TableTemplate';

const propTypes = {
  tableData : PropTypes.array,
  tableHeaders : PropTypes.array,
  tableTitle : PropTypes.string,
  onRemoveFarm : PropTypes.func,
  onEditFarm : PropTypes.func,
  onGoToFarm : PropTypes.func,
  buttons : PropTypes.object
};

const defaultProps = {
  tableData : [],
  tableHeaders : [
    'id',
    'name',
    'overview',
    'actions'
  ],
  tableTitle : 'Ферми'
};

const ColStyles = {
  padding : '5px',
  whiteSpace: 'normal',
  height : 'auto',
  textAlign : 'center'
};

class TableFarms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader : true,
      fixedFooter : true,
      stripedRows : true,
      showRowHover : true,
      selectable : true,
      multiSelectable : true,
      enableSelectAll : false,
      deselectOnClickaway : true,
      showCheckboxes : true,
      height : 'auto'
    };
  }

  render() {
    const { tableData, tableHeaders, onRemoveFarm, onEditFarm, onGoToFarm, buttons } = this.props;

    // console.log('TableFarms | render | props ', this.props);

    return (
      <div className='table-farms'>
        <TableTemplate
          tableHeaders={tableHeaders.map((item, i) => !!item ? (<FormattedMessage key={i} {...messages[item]} />) : null)}
          options={{
            selectable : false,
            showCheckboxes : false,
            firstLineCheckbox: false }}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} selected={row.selected} className='table-farms__row'>
              <TableRowColumn style={ColStyles}>
                {row.id}
              </TableRowColumn>
              <TableRowColumn>
                {row.name}
              </TableRowColumn>
              <TableRowColumn className='table-farms__button-place'>
                <RaisedButton label={<FormattedMessage {...messages.button.overview} />} onMouseDown={() => onGoToFarm(row)}/>
              </TableRowColumn>
              <TableRowColumn className='table-farms__button-place'>
                {buttons && buttons.change ?
                  <RaisedButton className='table-farms__edit-button page-button'
                    label={<FormattedMessage {...messages.button.edit} />} secondary
                    onMouseDown={() => onEditFarm(row)}
                  /> : null}
                {buttons && buttons.delete ?
                  <RaisedButton className='table-farms__delete-button page-button'
                    label={<FormattedMessage {...messages.button.remove} />} secondary
                    onMouseDown={() => onRemoveFarm(row)}
                  /> : null}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableTemplate>
      </div>
    );
  }
}


TableFarms.propTypes = propTypes;
TableFarms.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TableFarms);
