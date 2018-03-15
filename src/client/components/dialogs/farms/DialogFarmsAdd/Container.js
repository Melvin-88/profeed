/**
*
* FarmsDialog
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { TIMEZONES, LANGUAGES } from 'helpers/constants';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  closeDialog : PropTypes.func,
  submitAddFarm : PropTypes.func,
  open : PropTypes.bool,
  locked : PropTypes.bool,
  error : PropTypes.bool,
  errorMessage : PropTypes.string,
  intl : PropTypes.object
};
const defaultProps = { };
const initialState = {
  timezone : 1,
  language : 1,
  specLockByValidateName : true,
  name : ''
};

class DialogFarmsAdd extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTimeZone = this.handleChangeTimeZone.bind(this);
    this.handleChangeLang = this.handleChangeLang.bind(this);

    this.state = { ...initialState };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && (this.props.open !== nextProps.open)) {
      this.setState(initialState);
    }
  }

  handleName(e, v) {
    if (v === '') {
      this.setState({
        name : '',
        specLockByValidateName : true
      });
    } else {
      this.setState({
        name : v,
        specLockByValidateName : false
      });
    }
  }

  handleChangeTimeZone(event, index, value) {
    this.setState({ timezone : value });
  }

  handleChangeLang(event, index, value) {
    this.setState({ language : value });
  }

  handleClose() {
    const { closeDialog } = this.props;

    // console.log('FarmsDialog | handleClose | props ', this.props);
    closeDialog();
  }

  handleSubmit() {
    // console.log('Submit name : ', this.enterFarmName.input.value, this.timeZone);
    const { submitAddFarm } = this.props;

    submitAddFarm({ ...this.state });
  }

  checkValidate() {
    const { name, specLockByValidateName } = this.state;

    return !!name && !specLockByValidateName;
  }

  render() {
    const { open, locked, error, errorMessage, intl } = this.props;

    const actions = [
      <FlatButton
        key='1'
        label={<FormattedMessage {...messages.button.cancel} />}
        disabled={locked}
        secondary
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        key='2'
        label={<FormattedMessage {...messages.button.save} />}
        disabled={locked || !this.checkValidate()}
        primary
        onTouchTap={this.handleSubmit}
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
          <div className='dialog-form'>
            <span className='dialog-form__label'><FormattedMessage {...messages.form.enterName} />:</span>
            <TextField
              className='dialog-form__input'
              disabled={locked}
              hintText={intl.formatMessage(messages.form.enterNameHint)}
              name='name'
              value={this.state.name}
              onChange={::this.handleName}
            />
            <br/>
            <span className='dialog-form__label'><FormattedMessage {...messages.form.timezone} />:</span>
            <SelectField
              className='dialog-form__input'
              value={this.state.timezone}
              onChange={this.handleChangeTimeZone}
            >
              { TIMEZONES.map((item, key) => {
                return <MenuItem key={key} value={item.id} primaryText={item.tz} />;
              })}
            </SelectField>
            <br/>
            <span className='dialog-form__label'><FormattedMessage {...messages.form.language} />:</span>
            <SelectField
              className='dialog-form__input'
              value={this.state.language}
              onChange={this.handleChangeLang}
            >
              { LANGUAGES.map((item, key) => {
                return <MenuItem key={key} value={item.id} primaryText={item.title} />;
              })}
            </SelectField>
            { error ? <span className='error-message'>{errorMessage}</span> : '' }
          </div>
        </DialogTemplate>
      </div>
    );
  }
}

DialogFarmsAdd.propTypes = propTypes;
DialogFarmsAdd.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogFarmsAdd));
