/**
 * Created by Tanya on 23.05.2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import './style.css';

const propTypes = {
  id : PropTypes.number,
  name : PropTypes.string,
  percent : PropTypes.number,
  onChangePercent : PropTypes.func
};
const defaultProps = { };

class PercentageItem extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { id, name, percent, onChangePercent } = this.props;

    return (
      <div>
        <span className='percentage-item-name'>{name}</span>
        <TextField
          name='percent'
          className='dialog-customer-form__input'
          value={percent}
          onChange={(e, v) => onChangePercent(id, v)}
          type='number'
        />
      </div>
    );
  }
}

PercentageItem.propTypes = propTypes;
PercentageItem.defaultProps = defaultProps;

export default PercentageItem;
