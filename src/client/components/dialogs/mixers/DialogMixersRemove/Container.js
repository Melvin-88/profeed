/**
*
* Mixers
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
  submitRemoveMixers : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  mixer : React.PropTypes.object,
  intl: React.PropTypes.object
};
const defaultProps = { };

class DialogMixersRemove extends Component { // eslint-disable-line react/prefer-stateless-function
  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitRemoveMixers, mixer } = this.props;

    submitRemoveMixers(mixer);
  }

  contentPrepare(mixer) {
    return (<span className='dialog-form__label'>
      Ви підтверджуєте видалення міксера {mixer.name}?
    </span>);
  }

  render() {
    const { open, locked, error, errorMessage, mixer, intl } = this.props;

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
              mixer ?
                <FormattedMessage
                  {...messages.message}
                  values={{ name: <b> { mixer.name } </b>, id: <b> {mixer.id} </b> }}
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

DialogMixersRemove.propTypes = propTypes;
DialogMixersRemove.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogMixersRemove));
