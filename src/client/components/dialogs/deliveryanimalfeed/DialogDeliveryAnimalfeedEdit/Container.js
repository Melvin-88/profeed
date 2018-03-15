/**
*
* DeliveryAnimalfeed
*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DialogTemplate from 'client/shared/DialogTemplate';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : PropTypes.string,
  closeDialog : PropTypes.func,
  submitEditDeliveryAnimalfeed : PropTypes.func,
  open : PropTypes.bool,
  locked : PropTypes.bool,
  error : PropTypes.bool,
  errorMessage : PropTypes.string,
  deliveryAnimlfeed : PropTypes.object,
  ingredients: PropTypes.array,
  intl : PropTypes.object
};
const defaultProps = { };
const initState = {
  checkedDeliveryAnimalfeed : -1,
  amount : '',
  specLockByValidateAmount : false
};

class DialogDeliveryAnimalfeedEdit extends Component { // eslint-disable-line react/prefer-stateless-function
  state = { ...initState };

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && (this.props.open !== nextProps.open)) {
      this.setState({
        ...initState,
        checkedDeliveryAnimalfeed : nextProps.deliveryAnimlfeed.animalfeed,
        amount : nextProps.deliveryAnimlfeed.amount
      });
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitEditDeliveryAnimalfeed, deliveryAnimlfeed } = this.props;
    const { checkedDeliveryAnimalfeed, amount } = this.state;

    submitEditDeliveryAnimalfeed({
      id : deliveryAnimlfeed.id,
      animalfeed : checkedDeliveryAnimalfeed,
      amount
    });
  }

  handleKeySubmit(e) {
    const { specLockByValidateAmount } = this.state;

    if (e.keyCode === 13
      && !specLockByValidateAmount) {
      this.handleSubmit();
    }
  }

  handleAmountInput(e, v) {
    const asInt = parseInt(v, 10);

    if (asInt) {
      this.setState({
        amount : asInt > -1 ? asInt : 0,
        specLockByValidateAmount : false
      });
    } else if (v === '') {
      // Can delete all symbols, but lock Submit
      this.setState({
        amount : '',
        specLockByValidateAmount : true
      });
    } else {
      // You have not power for to input symbols!
      this.setState({
        specLockByValidateAmount : true
      });
    }
  }

  handleChangeAnimalffed(e, i, v) {
    this.setState({
      checkedDeliveryAnimalfeed : v
    });
  }

  render() {
    const { open, locked, error, errorMessage, ingredients, intl } = this.props;

    const actions = [
      <FlatButton
        key='1'
        label={<FormattedMessage {...messages.button.cancel}/>}
        disabled={locked}
        secondary
        onTouchTap={::this.handleClose}
      />,
      <FlatButton
        key='2'
        label={<FormattedMessage {...messages.button.save}/>}
        disabled={locked}
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
              { intl.formatMessage(messages.form.deliveryAnimalfeed) }
            </span>
            <SelectField
              className='dialog-form__input'
              value={this.state.checkedDeliveryAnimalfeed}
              onChange={::this.handleChangeAnimalffed}
            >
              {ingredients.map((item, i) => (
                <MenuItem key={i} value={item.id} primaryText={item.name} />
              ))}
            </SelectField>
            <br/>
            <span className='dialog-form__label'>
              { intl.formatMessage(messages.form.amount) }
            </span>
            <TextField
              name='name'
              className='dialog-form__input'
              disabled={locked}
              value={this.state.amount}
              onChange={::this.handleAmountInput}
              hintText={intl.formatMessage(messages.form.amountHint)}
              type='number'
            />
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogDeliveryAnimalfeedEdit.propTypes = propTypes;
DialogDeliveryAnimalfeedEdit.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogDeliveryAnimalfeedEdit));
