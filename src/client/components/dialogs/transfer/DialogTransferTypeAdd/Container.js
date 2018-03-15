/**
*
* DialogTransferTypeAdd
*
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { TRANSFER_TYPES } from 'helpers/constants';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : React.PropTypes.string,
  closeDialog : React.PropTypes.func,
  submitAddTypeTransfer : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  intl: React.PropTypes.object
};
const defaultProps = { };

const initialState = {
  name : '',
  checked : TRANSFER_TYPES.ADD.title,
  specLockByName : true
};

class DialogTransferTypeAdd extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && (this.props.open !== nextProps.open)) {
      this.setState({ ...initialState });
    }
  }

  // Handle inputs
  handleNameInput(e, v) {
    this.setState({
      name : v,
      specLockByName : v.trim() === ''
    });
  }

  handleCheckType(e, v) {
    this.setState({
      checked : v
    });
  }

  handleSubmit() {
    const { submitAddTypeTransfer } = this.props;
    const transferType = Object.keys(TRANSFER_TYPES).map((item) => {
      return TRANSFER_TYPES[item];
    }).find((item) => {
      return item.title === this.state.checked;
    });
    const transfer = {
      name: this.state.name,
      farmId : this.props.farmId,
      transferType : transferType.id
    };

    submitAddTypeTransfer(transfer);
  }

  handleKeySubmit(e) {
    const { specLockByValidateCount } = this.state;

    if (e.keyCode === 13 && !specLockByValidateCount) {
      this.handleSubmit();
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  render() {
    const { open, locked, error, errorMessage, intl } = this.props;
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
        label={<FormattedMessage {...messages.button.addType} />}
        disabled={locked || this.state.specLockByName}
        primary
        onTouchTap={::this.handleSubmit}
      />
    ];

    // console.log('DialogTransferTypeAdd | render | props ', this.props);

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
              {intl.formatMessage(messages.form.name)}
            </span>
            <TextField
              name='name'
              className='dialog-form__input'
              disabled={locked}
              value={this.state.name}
              onChange={::this.handleNameInput}
            />
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.type.title)}
            </span>
            <RadioButtonGroup name='shipSpeed' defaultSelected={TRANSFER_TYPES.ADD.title} onChange={::this.handleCheckType}>
              <RadioButton
                value={TRANSFER_TYPES.ADD.title}
                label={intl.formatMessage(messages.form.type.checkbox.addingAnimals)}
                checkedIcon={<CheckBox />}
                uncheckedIcon={<CheckBoxOutlineBlank />}
              />
              <RadioButton
                value={TRANSFER_TYPES.REMOVE.title}
                label={intl.formatMessage(messages.form.type.checkbox.subtractionAnimals)}
                checkedIcon={<CheckBox />}
                uncheckedIcon={<CheckBoxOutlineBlank />}
              />
              <RadioButton
                value={TRANSFER_TYPES.SWAP.title}
                label= {intl.formatMessage(messages.form.type.checkbox.transfersBetweenGroups)}
                checkedIcon={<CheckBox />}
                uncheckedIcon={<CheckBoxOutlineBlank />}
              />
            </RadioButtonGroup>
            {error ? <span className='error-message'>{errorMessage}</span> : ''}
          </div>
        </DialogTemplate>
      </div>
    );
  }
}

DialogTransferTypeAdd.propTypes = propTypes;
DialogTransferTypeAdd.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogTransferTypeAdd));
