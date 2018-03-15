/**
*
* RationLoadingCounts
*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
// import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : React.PropTypes.string,
  closeDialog : React.PropTypes.func,
  submitRemoveRationLoadingCounts : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  loadingCount : React.PropTypes.object,
  intl: React.PropTypes.object
};
const defaultProps = { };

class DialogRationLoadingCountsRemove extends Component { // eslint-disable-line react/prefer-stateless-function
  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitRemoveRationLoadingCounts, loadingCount } = this.props;

    submitRemoveRationLoadingCounts(loadingCount);
  }

  render() {
    const { open, locked, error, errorMessage, loadingCount, intl } = this.props;

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
          <div className='dialog-form'>
            {
              loadingCount ?
                <FormattedMessage
                  {...messages.message}
                  values={{ name: <b> { loadingCount.name } </b>, id: <b> { loadingCount.id } </b> }}
                />
                : null
            }
            {error ? <span className='error-message'>{errorMessage}</span> : ''}
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogRationLoadingCountsRemove.propTypes = propTypes;
DialogRationLoadingCountsRemove.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogRationLoadingCountsRemove));
