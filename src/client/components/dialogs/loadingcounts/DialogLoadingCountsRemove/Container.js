/**
*
* LoadingCounts
*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
// import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl } from 'react-intl';
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

class DialogLoadingCountsRemove extends Component { // eslint-disable-line react/prefer-stateless-function
  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submit, loadingcount } = this.props;

    submit(loadingcount);
  }

  render() {
    const { open, locked, error, errorMessage,  loadingcount, intl } = this.props;

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
        label={<FormattedMessage {...messages.button.remove} />}
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
          {
            loadingcount ?
              <div className='dialog-form'>
                <FormattedMessage {...messages.message} values={{ name: <b> { loadingcount.name } </b> }}/>
              </div>
              : null
          }
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogLoadingCountsRemove.propTypes = propTypes;
DialogLoadingCountsRemove.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogLoadingCountsRemove));
