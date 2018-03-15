/**
*
* DialogDeliveryAdd
*
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
// import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : React.PropTypes.string,
  ingredients: React.PropTypes.array,
  closeDialog : React.PropTypes.func,
  submitAddDelivery : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  intl: React.PropTypes.object
};
const defaultProps = { };

class DialogDeliveryAdd extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      deliveryName : '',
      amountKg : '',
      sumCount : '',
      dateDelivery : '2017-03-22',
      changeDateDelivery : '2017-03-28',
      specLockByValidateAmount: true,
      specLockByValidatePrice: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && (this.props.open !== nextProps.open)) {
      this.setState({
        deliveryName : '',
        amountKg : '',
        sumCount : ''
      });
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    // console.log('DialogDeliveryAdd | handleClose | props ', this.props);
    closeDialog();
  }

  handleSubmit() {
    const { submitAddDelivery, farmId } = this.props;

    submitAddDelivery({ ...this.state, farmId });
    // console.log('DialogDeliveryAdd | handleSubmit | farmId ', farmId);
  }

  handleKeySubmit(e) {
    const { specLockByValidateAmount, specLockByValidatePrice } = this.state;

    if (e.keyCode === 13
      && !specLockByValidateAmount
      && !specLockByValidatePrice) {
      this.handleSubmit();
    }
  }

  // Handle inputs
  handleNameInput(e, i, v) {
    this.setState({
      deliveryName : v
    });
  }

  handleAmountInput(e, v) {
    const asInt = parseInt(v, 10);

    if (asInt) {
      this.setState({
        amountKg : asInt,
        specLockByValidateAmount : false
      });
    } else if (v === '') {
      // Can delete all symbols, but lock Submit
      this.setState({
        amountKg : '',
        specLockByValidateAmount : true
      });
    } else {
      // You have not power for to input symbols!
      this.setState({
        specLockByValidateAmount : true
      });
    }
  }

  handleSumInput(e, v) {
    const asInt = parseInt(v, 10);

    if (asInt) {
      this.setState({
        sumCount : asInt,
        specLockByValidatePrice : false
      });
    } else if (v === '') {
      // Can delete all symbols, but lock Submit
      this.setState({
        sumCount : '',
        specLockByValidatePrice : true
      });
    } else {
      // You have not power for to input symbols!
      this.setState({
        specLockByValidatePrice : true
      });
    }
  }

  handleDateInput(e, v) {
    this.setState({
      dateDelivery : v
    });
  }

  handleChangeDateInput(e, v) {
    this.setState({
      changeDateDelivery : v
    });
  }

  render() {
    const { open, locked, error, errorMessage, ingredients, intl } = this.props;

    const actions = [
      <FlatButton
        key='1'
        label={<FormattedMessage {...messages.button.cancel} />}
        disabled={locked}
        secondary
        onTouchTap={::this.handleClose}
      />,
      <FlatButton
        key='2'
        label={<FormattedMessage {...messages.button.save} />}
        disabled={locked || this.state.specLockByValidateAmount || this.state.specLockByValidatePrice}
        primary
        onTouchTap={::this.handleSubmit}
      />
    ];

    return (
      <div>
        <DialogTemplate
          title={intl.formatMessage(messages.title)}
          actions={actions}
          modal
          open={open}
          errorMessage={error ? errorMessage : null}

        >
          <div className='dialog-form' onKeyDown={::this.handleKeySubmit}>
            <span className='dialog-form__label'>
              { intl.formatMessage(messages.form.selectIngredient) }
            </span>
            <SelectField
              className='dialog-form__input'
              value={this.state.deliveryName}
              onChange={::this.handleNameInput}
            >
              {ingredients.map((item, i) => (
                <MenuItem key={i} value={item.id} primaryText={item.name} />
              ))}
            </SelectField>
            <br/>
            <span className='dialog-form__label'>
              { intl.formatMessage(messages.form.enterYourWeight.title) }
            </span>
            <TextField
              name='name'
              className='dialog-form__input'
              disabled={locked}
              value={this.state.amountKg}
              onChange={::this.handleAmountInput}
              hintText={intl.formatMessage(messages.form.enterYourWeight.hint)}
            />
            <br/>
            <span className='dialog-form__label'>
              { intl.formatMessage(messages.form.enterTheAmount.title) }
            </span>
            <TextField
              name='name'
              className='dialog-form__input'
              disabled={locked}
              value={this.state.sumCount}
              onChange={::this.handleSumInput}
              hintText={intl.formatMessage(messages.form.enterTheAmount.hint)}
            />
            <br/>
            {/* <DatePicker
              hintText='Date Picker'
              value={this.state.dateDelivery}
              onChange={::this.handleDateInput}
            />
            <DatePicker
              hintText='Date'
              value={this.state.changeDateDelivery}
              onChange={::this.handleChangeDateInput}
            /> */}
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogDeliveryAdd.propTypes = propTypes;
DialogDeliveryAdd.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogDeliveryAdd));
