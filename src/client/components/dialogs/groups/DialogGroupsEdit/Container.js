/**
*
* DialogGroupsEdit
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
  group : React.PropTypes.object,
  closeDialog : React.PropTypes.func,
  submitEditGroup : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  intl: React.PropTypes.object
};
const defaultProps = { };
const initState = {
  name : '',
  specLockByValidateName : false,
  lactating : false
};

class DialogGroupsEdit extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { ...initState };
  }

  componentWillReceiveProps(nextProps) {
    console.log('DialogGroupsEdit | componentWillReceiveProps | this.props & nextProps & ',
      this.props, nextProps, !this.props.open && (this.props.open !== nextProps.open));

    if (!this.props.open && (this.props.open !== nextProps.open)) {
      this.setState({
        name : nextProps.group.name,
        lactating : nextProps.group.lactating
      });
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    // console.log('DialogGroupsEdit | handleClose | props ', this.props);
    closeDialog();
  }

  handleSubmit() {
    const { name, lactating } = this.state;
    const { submitEditGroup, group } = this.props;

    // console.log('DialogGroupsEdit | handleSubmit | group ', name);
    submitEditGroup({ name, id : group.id, farm : group.farm, deleted: false, lactating }); // , farm : group.farm
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
      name : v,
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
              value={this.state.name}
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

DialogGroupsEdit.propTypes = propTypes;
DialogGroupsEdit.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogGroupsEdit));
