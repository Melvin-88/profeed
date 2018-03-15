/**
 *
 * RationLoadingCounts
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { checkIntInput } from 'helpers/validators';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : React.PropTypes.string,
  closeDialog : React.PropTypes.func,
  submitEditRationLoadingCounts : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  loadingCounts : React.PropTypes.array,
  mixers : React.PropTypes.array,
  freePercents : React.PropTypes.number,
  loadingCount : React.PropTypes.object,
  intl: React.PropTypes.object
};
const defaultProps = { };

const initialState = {
  loadingChecked : 0,
  mixerChecked : 0,
  coefficient : 0
};

class DialogRationLoadingCountsEdit extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  componentWillReceiveProps(nextProps) {
    const { open } = this.props;
    const { open : openNext, loadingCount, mixers } = nextProps;

    if (!open && (open !== openNext)) {
      this.setState({
        loadingChecked : loadingCount.id,
        mixerChecked : mixers[0] && mixers[0].id,
        coefficient : loadingCount.coefficient
      });
    }
  }

  handleLoadingChecked(e, i, v) {
    this.setState({
      loadingChecked : v
    });
  }

  handleCoefficientInput(e, v) {
    const { freePercents, loadingCount } = this.props;

    if (v === '' || (checkIntInput(v, -1, freePercents + loadingCount.coefficient))) {
      this.setState({
        coefficient : +v
      });
    }
  }

  handleMixerChecked(e, i, v) {
    this.setState({
      mixerChecked : v
    });
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitEditRationLoadingCounts, loadingCount } = this.props;
    const { coefficient, mixerChecked } = this.state;

    /*
     *"id": 1,
     "name": "ранок",
     "coefficient": 50.0,
     */

    submitEditRationLoadingCounts({
      id : loadingCount.id,
      name : loadingCount.name,
      coefficient,
      mixer : mixerChecked
    });
  }

  render() {
    const { open, locked, error, errorMessage, mixers, loadingCount, intl } = this.props;

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
        disabled={locked || this.state.coefficient < 1}
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
          <div className='dialog-form'>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.distribution)}
            </span>
            <SelectField
              className='dialog-form__input'
              hintText='Пусто'
              value={this.state.loadingChecked}
              onChange={::this.handleLoadingChecked}
            >
              {loadingCount ? <MenuItem value={loadingCount.id} primaryText={loadingCount.name} /> : ''}
            </SelectField>
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.enterValue)}
            </span>
            <TextField
              name='count'
              className='dialog-form__input'
              disabled={locked}
              value={this.state.coefficient}
              onChange={::this.handleCoefficientInput}
              type='number'
            />
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.mixer)}
            </span>
            <SelectField
              className='dialog-form__input'
              hintText='Пусто'
              value={this.state.mixerChecked}
              onChange={::this.handleMixerChecked}
            >
              { mixers.map((item, key) => {
                return <MenuItem key={key} value={item.id} primaryText={item.name} />;
              })}
            </SelectField>
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogRationLoadingCountsEdit.propTypes = propTypes;
DialogRationLoadingCountsEdit.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogRationLoadingCountsEdit));
