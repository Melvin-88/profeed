import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import Divider from 'material-ui/Divider';

const propTypes = {
  tableData : PropTypes.array,
  tableHeaders : PropTypes.array,
  tableTitle : PropTypes.string,
  options : PropTypes.object,
  children : PropTypes.array

};

const defaultProps = {
  tableData : [],
  tableHeaders : [],
  tableTitle : '',
  options : {
    fixedHeader : true,
    fixedFooter : true,
    stripedRows : false,
    showRowHover : false,
    selectable : true,
    multiSelectable : true,
    enableSelectAll : false,
    deselectOnClickaway : true,
    showCheckboxes : true,
    height : 'auto',
    firstLineCheckbox: false
  }
};

/*
* @options
*     {
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
* */
const optionsDef = {
  fixedHeader : true,
  fixedFooter : true,
  stripedRows : false,
  showRowHover : false,
  selectable : true,
  multiSelectable : true,
  enableSelectAll : false,
  deselectOnClickaway : false,
  showCheckboxes : true,
  height : 'auto',
  firstLineCheckbox: false
};

class TableTemplate extends Component {

  render() {
    const { tableHeaders, tableTitle } = this.props;
    const options = Object.assign(optionsDef, this.props.options || {});

    const firstLineCheckbox  = options.firstLineCheckbox ? 'first-line-header' : '';

    return (
      <div>
        <Table
          height={options.height}
          fixedHeader={options.fixedHeader}
          fixedFooter={options.fixedFooter}
          selectable={options.selectable}
          multiSelectable={options.multiSelectable}
          className='table'
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={options.showCheckboxes}
            enableSelectAll={options.enableSelectAll}
            className='table__table-header'
          >
            {tableTitle ? (
              <TableRow>
                <TableHeaderColumn colSpan={tableHeaders.length.toString()} className='table__table-header__title'>
                  {tableTitle}
                </TableHeaderColumn>
              </TableRow>) : ''
            }
            <TableRow className={`table__table-header__headers ${firstLineCheckbox}`}>
              {tableHeaders.map((title, index) => {
                return (<TableHeaderColumn key={index}>
                  {title}
                </TableHeaderColumn>);
              })}
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={options.showCheckboxes}
            deselectOnClickaway={options.deselectOnClickaway}
            showRowHover={options.showRowHover}
            stripedRows={options.stripedRows}
            className='table__table-body'
          >
            {this.props.children}
          </TableBody>
        </Table>
        <Divider />
      </div>
    );
  }
}

TableTemplate.propTypes = propTypes;
TableTemplate.defaultProps = defaultProps;

export default TableTemplate;
