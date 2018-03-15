/**
*
* Worksheets
*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : PropTypes.func,
  closeDialog : PropTypes.func,
  submit : PropTypes.func,
  open : PropTypes.bool,
  locked : PropTypes.bool,
  error : PropTypes.bool,
  errorMessage : PropTypes.string,
  worksheet : PropTypes.object,
  intl : PropTypes.object
};
const defaultProps = { };
const initState = {
  name : '',
  companyName : '',
  indCode : '',
  structureName : '',
  farmFullName : '',
  appoint : '',
  structureManager : '',
  farmManager : '',
  zootechnics : '',
  accountant : '',
  weigher : ''
};

class DialogWorksheetsEdit extends Component { // eslint-disable-line react/prefer-stateless-function
  state = { ...initState };

  componentWillReceiveProps(nextProps) {
    const { open } = this.props;
    const { open : openNext, worksheet } = nextProps;

    if (!open && (open !== openNext)) {
      this.setState({ ...initState, ...worksheet });
    }
  }

  handleName(e, v) {
    this.setState({
      name : v
    });
  }

  handleCompanyName(e, v) {
    this.setState({
      companyName : v
    });
  }

  handleIndCode(e, v) {
    this.setState({
      indCode : v
    });
  }

  handleStructureName(e, v) {
    this.setState({
      structureName : v
    });
  }

  handleFarmFullName(e, v) {
    this.setState({
      farmFullName : v
    });
  }

  handleAppoint(e, v) {
    this.setState({
      appoint : v
    });
  }

  handleStructureManager(e, v) {
    this.setState({
      structureManager : v
    });
  }

  handleFarmManager(e, v) {
    this.setState({
      farmManager : v
    });
  }


  handleZootechnics(e, v) {
    this.setState({
      zootechnics : v
    });
  }

  handleAccountant(e, v) {
    this.setState({
      accountant : v
    });
  }


  handleWeigher(e, v) {
    this.setState({
      weigher : v
    });
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submit, worksheet, farmId } = this.props;
    const { name, companyName, indCode, structureName, farmFullName, appoint, structureManager, farmManager, zootechnics,
      accountant,
      weigher } = this.state;

    submit({
      name, companyName, indCode, structureName, farmFullName, appoint, structureManager, farmManager, zootechnics,
      accountant, weigher, id : worksheet && worksheet.id, farm : +farmId
    });
  }

  render() {
    const { open, locked, error, errorMessage, intl, worksheet } = this.props;

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
          title={intl.formatMessage(messages.title[worksheet ? 'edit' : 'add'])}
          autoScrollBodyContent
          actions={actions}
          modal
          open={open}
          errorMessage={error ? errorMessage : null}

        >
          <div className='dialog-form'>
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.name)}:
            </span>
            <TextField
              className='dialog-form__input'
              value={this.state.name}
              onChange={::this.handleName}
            />
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.companyName)}:
            </span>
            <TextField
              className='dialog-form__input'
              value={this.state.companyName}
              onChange={::this.handleCompanyName}
            />
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.indCode)}:
            </span>
            <TextField
              className='dialog-form__input'
              value={this.state.indCode}
              onChange={::this.handleIndCode}
              type='number'
            />
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.structureName)}:
            </span>
            <TextField
              className='dialog-form__input'
              value={this.state.structureName}
              onChange={::this.handleStructureName}
            />
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.farmFullName)}:
            </span>
            <TextField
              className='dialog-form__input'
              value={this.state.farmFullName}
              onChange={::this.handleFarmFullName}
            />
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.appoint)}:
            </span>
            <TextField
              className='dialog-form__input'
              value={this.state.appoint}
              onChange={::this.handleAppoint}
            />
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.structureManager)}:
            </span>
            <TextField
              className='dialog-form__input'
              value={this.state.structureManager}
              onChange={::this.handleStructureManager}
            />
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.farmManager)}:
            </span>
            <TextField
              className='dialog-form__input'
              value={this.state.farmManager}
              onChange={::this.handleFarmManager}
            />
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.zootechnics)}:
            </span>
            <TextField
              className='dialog-form__input'
              value={this.state.zootechnics}
              onChange={::this.handleZootechnics}
            />
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.accountant)}:
            </span>
            <TextField
              className='dialog-form__input'
              value={this.state.accountant}
              onChange={::this.handleAccountant}
            />
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.weigher)}:
            </span>
            <TextField
              className='dialog-form__input'
              value={this.state.weigher}
              onChange={::this.handleWeigher}
            />
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogWorksheetsEdit.propTypes = propTypes;
DialogWorksheetsEdit.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogWorksheetsEdit));
