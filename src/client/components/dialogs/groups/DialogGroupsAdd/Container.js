/**
*
* DialogGroupsAdd
*
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : React.PropTypes.string,
  closeDialog : React.PropTypes.func,
  submitAddGroup : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  intl: React.PropTypes.object
};
const defaultProps = { };
const initState = {
  groupName : '',
  lactating : false,
  specLockByValidateName : true
};

class DialogGroupsAdd extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { ...initState };
  }

  handleClose() {
    const { closeDialog } = this.props;

    // console.log('DialogGroupsAdd | handleClose | props ', this.props);
    closeDialog();
  }

  handleSubmit() {
    const { groupName, lactating } = this.state;

    const { submitAddGroup, farmId } = this.props;

    submitAddGroup({ groupName, farmId, lactating });
  }

  handleKeySubmit(e) {
    const { specLockByValidateName } = this.state;

    if (e.keyCode === 13 && !specLockByValidateName) {
      this.handleSubmit();
    }
  }

  // Handle inputs
  handleNameInput(e, v) {
    this.setState({
      groupName : v,
      specLockByValidateName : v.trim() === ''
    });
  }

  handleLactating() {
    this.setState({
      lactating : !this.state.lactating
    });
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
        label={<FormattedMessage {...messages.button.save} />}
        disabled={locked || this.state.specLockByValidateName}
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
          <div className='dialog-form' onKeyDown={this.handleKeySubmit}>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.name.title)}
            </span>
            <TextField
              name='name'
              className='dialog-form__input'
              disabled={locked}
              hintText={intl.formatMessage(messages.form.name.hint)}
              value={this.state.groupName}
              onChange={::this.handleNameInput}
            />
            <br/>
            <Toggle
              label={intl.formatMessage(messages.form.lactating)}
              toggled={this.state.lactating}
              onToggle={::this.handleLactating}
            />
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogGroupsAdd.propTypes = propTypes;
DialogGroupsAdd.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogGroupsAdd));
