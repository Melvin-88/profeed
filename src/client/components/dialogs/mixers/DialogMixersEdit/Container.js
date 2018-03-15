/**
*
* Mixers
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
  submitEditMixers : React.PropTypes.func,
  getFarms : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  farms : React.PropTypes.array,
  mixer : React.PropTypes.object,
  intl: React.PropTypes.object
};
const defaultProps = { };

const initState = {
  name : '',
  farm : null,
  maxWeight : 0
};

class DialogMixersEdit extends Component { // eslint-disable-line react/prefer-stateless-function
  state = { ...initState };

  componentWillReceiveProps(nextProps) {
    const { open } = this.props;
    const { open : openNext, mixer } = nextProps;

    if (!open && (open !== openNext)) {
      this.setState({ ...mixer });
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitEditMixers } = this.props;

    submitEditMixers({ ...this.state });
  }

  handleNameInput(e, v) {
    this.setState({
      name : v
    });
  }

  handleFarmSelected(e, i, v) {
    this.setState({
      farm : v
    });
  }

  handleMaxWeightInput(e, v) {
    if (v === '' || (checkIntInput(v, -1, 99999))) {
      this.setState({
        maxWeight : +v
      });
    }
  }

  isValid() {
    const { name, farm, maxWeight } = this.state;

    if (name.trim() === '') return false;

    if (!farm) return false;

    if (!maxWeight) return false;

    return true;
  }

  render() {
    const { open, locked, error, errorMessage, farms, intl } = this.props;

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
          modal
          open={open}
          errorMessage={error ? errorMessage : null}

        >
          <div className='dialog-form'>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.enterTheNameOfTheMixer)}
            </span>
            <TextField
              name='name'
              className='dialog-form__input'
              disabled={locked}
              value={this.state.name}
              onChange={::this.handleNameInput}
            />
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.farm)}
            </span>
            <SelectField
              className='dialog-form__input'
              value={this.state.farm}
              onChange={::this.handleFarmSelected}
            >
              { farms.map((item, key) => {
                return <MenuItem key={key} value={item.id} primaryText={item.name} />;
              })}
            </SelectField>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.maximumCargoWeight)}
            </span>
            <TextField
              name='maxWeight'
              className='dialog-form__input'
              disabled={locked}
              value={this.state.maxWeight}
              onChange={::this.handleMaxWeightInput}
              type='number'
            />
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogMixersEdit.propTypes = propTypes;
DialogMixersEdit.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogMixersEdit));
