/**
 *
 * DialogCustomerEdit
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import { checkEmail } from 'helpers/validators';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  userGroups: React.PropTypes.array,
  farms: React.PropTypes.array,
  closeDialog : React.PropTypes.func,
  submit : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  customer : React.PropTypes.object,
  intl: React.PropTypes.object
};
const defaultProps = { };
const initState = {
  scroll : true,
  username : '',
  firstName : '',
  lastName : '',
  phoneNumber : '',
  email : '',
  about : '',
  active : false,
  specLockByValidateUsername : false,
  specLockByValidateFirstName : false,
  specLockByValidateLastName : false,
  specLockByValidatePhoneNumber: false,
  specLockByValidateEmail : false,
  farms : [],
  groups : []
};

class DialogCustomerEdit extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { ...initState };
  }

  componentWillReceiveProps(nextProps) {
    const { open } = this.props;
    const { open : openNext, customer } = nextProps;

    if (!open && (open !== openNext)) {
      this.setState({ ...initState, ...customer });
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    // console.log('DialogCustomerEdit | handleClose | props ', this.props);
    closeDialog();
  }

  handleSubmit() {
    const { submit, customer } = this.props;

    submit({ ...this.state,
      farms : this.state.farms.map((id) => {
        return { id };
      }),
      groups : this.state.groups.map((id) => {
        return { id };
      }),
      id : customer.id
    });
  }

  // Handle inputs
  handleUsername(e, v) {
    if (v === '') {
      this.setState({
        username : '',
        specLockByValidateUsername : true
      });
    } else {
      this.setState({
        username : v,
        specLockByValidateUsername : false
      });
    }
  }

  handleFirstName(e, v) {
    if (v === '') {
      this.setState({
        firstName : '',
        specLockByValidateFirstName : true
      });
    } else {
      this.setState({
        firstName : v,
        specLockByValidateFirstName : false
      });
    }
  }

  handleLastName(e, v) {
    if (v === '') {
      this.setState({
        lastName : '',
        specLockByValidateLastName : true
      });
    } else {
      this.setState({
        lastName : v,
        specLockByValidateLastName : false
      });
    }
  }

  handlePhoneNumber(e, v) {
    const asInt = parseInt(v, 10);

    if (asInt) {
      this.setState({
        phoneNumber : asInt,
        specLockByValidatePhoneNumber : false
      });
    } else if (v === '') {
      this.setState({
        phoneNumber : '',
        specLockByValidatePhoneNumber : true
      });
    } else {
      this.setState({
        specLockByValidatePhoneNumber : true
      });
    }
  }

  handleEmail(e, v) {
    if (v) {
      this.setState({
        email : v,
        specLockByValidateEmail : !checkEmail(v)
      });
    } else if (v === '') {
      this.setState({
        email : v,
        specLockByValidateEmail : true
      });
    } else {
      this.setState({
        specLockByValidateEmail : true
      });
    }
  }

  handleActive() {
    this.setState({
      active: !this.state.active
    });
  }

  handleFarms(event, index, values) {
    // console.log('farm values : ', values);
    this.setState({
      farms : values
    });
  }

  handleGroups(event, index, values) {
    this.setState({
      groups : values
    });
  }

  handleAbout(e, v) {
    this.setState({
      about: v
    });
  }

  menuItems(items, checkedItems) {
    // console.log('checkedItems : ', checkedItems);
    return items.map((item, i) => (
      <MenuItem
        key={i}
        insetChildren
        checked={checkedItems && checkedItems.includes(item.id)}
        value={item.id}
        primaryText={item.name}
      />
    ));
  }

  isValid() {
    const { specLockByValidateUsername, specLockByValidateFirstName,
      specLockByValidateLastName, specLockByValidatePhoneNumber, specLockByValidateEmail } = this.state;

    if (specLockByValidateUsername || specLockByValidateFirstName || specLockByValidateLastName ||
      specLockByValidatePhoneNumber || specLockByValidateEmail) return false;

    return true;
  }

  render() {
    const { open, locked, error, errorMessage, farms, userGroups, intl } = this.props;

    // console.log('dialogs | DialogCustomerEdit | state', this.state, this.props);

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
        disabled={locked || !this.isValid()}
        primary
        onTouchTap={::this.handleSubmit}
      />
    ];

    return (
      <div>
        <DialogTemplate
          title={intl.formatMessage(messages.title)}
          actions={actions}
          autoScrollBodyContent={this.state.scroll}
          modal
          open={open}
          errorMessage={error ? errorMessage : null}

        >
          <div className='dialog-form'>
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.nickname.title)}
            </span>
            <TextField
              name='username'
              className='dialog-form__input'
              disabled={locked}
              value={this.state.username}
              onChange={::this.handleUsername}
              hintText={intl.formatMessage(messages.form.nickname.hint)}
            />
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.firstname.title)}
            </span>
            <TextField
              name='first name'
              className='dialog-form__input'
              value={this.state.firstName}
              onChange={::this.handleFirstName}
              hintText={intl.formatMessage(messages.form.firstname.hint)}
            />
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.lastname.title)}
            </span>
            <TextField
              name='last name'
              className='dialog-form__input'
              value={this.state.lastName}
              onChange={::this.handleLastName}
              hintText={intl.formatMessage(messages.form.lastname.hint)}
            />
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.email.title)}
            </span>
            <TextField
              name='email'
              className='dialog-form__input'
              value={this.state.email}
              onChange={::this.handleEmail}
              hintText={intl.formatMessage(messages.form.email.hint)}
            />
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.phoneNumber.title)}
            </span>
            <TextField
              name='phone number'
              className='dialog-form__input'
              value={this.state.phoneNumber}
              onChange={::this.handlePhoneNumber}
              hintText={intl.formatMessage(messages.form.phoneNumber.hint)}
            />
            <br/>
            <Toggle
              onToggle={::this.handleActive}
              label={intl.formatMessage(messages.form.active)}
              defaultToggled={this.state.active}
            />
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.farm.title)}
            </span>
            <SelectField
              multiple
              className='dialog-form__input'
              value={this.state.farms}
              onChange={::this.handleFarms}
              hintText= {intl.formatMessage(messages.form.farm.hint)}
            >
              {this.menuItems(farms, this.state.farms)}
            </SelectField>
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.groupPermissions.title)}
            </span>
            <SelectField
              multiple
              className='dialog-form__input'
              value={this.state.groups}
              onChange={::this.handleGroups}
              hintText={intl.formatMessage(messages.form.groupPermissions.hint)}
            >
              {this.menuItems(userGroups, this.state.groups)}
            </SelectField>
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.about.title)}
            </span>
            <TextField
              name='about'
              className='dialog-form__input'
              multiLine
              rows={3}
              value={this.state.about}
              onChange={::this.handleAbout}
              hintText={intl.formatMessage(messages.form.about.hint)}
            />
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogCustomerEdit.propTypes = propTypes;
DialogCustomerEdit.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogCustomerEdit));
