/**
 * Created by Tanya on 02.04.2017.
 */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { checkIntInput } from 'helpers/validators';


const propTypes = {
  value : React.PropTypes.number,
  minValue : React.PropTypes.number,
  maxValue : React.PropTypes.number,
  onSaveValue : React.PropTypes.func
};

class TableRationLoadingCounts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditShow : false,
      editedVal : 0
    };
  }

  handleEditInColShow(value) {
    this.setState({
      isEditShow : true,
      editedVal : value
    });
    this.disableHideEdit = false;
  }

  handleEditInColHide() {
    if (!this.disableHideEdit) { // if false - can hide, else - mouse on button ok( wait until result will be save )
      this.setState({
        isEditShow : false,
        editedVal : 0
      });
    }
  }

  handleEditInColSave() {
    const { onSaveValue } = this.props;
    const newValue = this.state.editedVal;

    this.disableHideEdit = false;
    this.handleEditInColHide();

    onSaveValue(newValue);
  }

  handleEditInColHideControl(value) {
    this.disableHideEdit = value;
  }

  handleEditInColValue(v, minValue, maxValue) {
    if (v === '' || (checkIntInput(v, minValue, maxValue))) {
      this.setState({
        editedVal : +v
      });
    }
  }

  disableHideEdit = false;

  render() {
    const { value, minValue, maxValue } = this.props;

    return (<div>
      {this.state.isEditShow ? <div className='table__input__edit' onBlur={::this.handleEditInColHide}>
        <TextField
          name='count'
          className='table__input'
          value={this.state.editedVal}
          onChange={(e, v) => this.handleEditInColValue(v, minValue, maxValue)}
          type='number'
          autoFocus
        />
        <RaisedButton className='ration-page-button' label='OK' primary
          onTouchTap={::this.handleEditInColSave} onMouseEnter={() => this.handleEditInColHideControl(true)}
          onMouseLeave={() => this.handleEditInColHideControl(false)}
        />
      </div> : <span onClick={() => this.handleEditInColShow(value)}>
        {value}
      </span>}
    </div>);
  }
}

TableRationLoadingCounts.propTypes = propTypes;

export default TableRationLoadingCounts;
