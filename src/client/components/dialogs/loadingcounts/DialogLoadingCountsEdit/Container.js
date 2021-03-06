/**
*
* LoadingCounts
*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';


const propTypes = {
  farmId : React.PropTypes.string,
  closeDialog : React.PropTypes.func,
  submit : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  loadingcount : React.PropTypes.object,
  intl: React.PropTypes.object
};
const defaultProps = { };
const initState = {
  name : '',
  specLockByValidateName : true,
  settings : []
};

class DialogLoadingCountsEdit extends Component { // eslint-disable-line react/prefer-stateless-function
  state = { ...initState };

  componentWillReceiveProps(nextProps) {
    const { open } = this.props;
    const { open : openNext, loadingcount } = nextProps;

    if (!open && (open !== openNext)) {
      this.setState({ ...initState, ...loadingcount });
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

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submit, loadingcount } = this.props;
    const { name } = this.state;

    submit({ ...loadingcount, name });
  }

  handleKeySubmit(e) {
    const { specLockByValidateName } = this.state;

    if (e.keyCode === 13 && !specLockByValidateName) {
      this.handleSubmit();
    }
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
        label={<FormattedMessage {...messages.button.edit} />}
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
          <div className='dialog-form' onKeyDown={::this.handleKeySubmit}>
            <span className='dialog-form__label'>
              { intl.formatMessage(messages.form.editDistribution.title) }
            </span>
            <TextField
              name='name'
              className='dialog-form__input'
              disabled={locked}
              hintText={intl.formatMessage(messages.form.editDistribution.hint)}
              value={this.state.name}
              onChange={::this.handleName}
            />
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogLoadingCountsEdit.propTypes = propTypes;
DialogLoadingCountsEdit.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogLoadingCountsEdit));
