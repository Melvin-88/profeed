/**
*
* DeliveryAnimalfeed
*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DialogTemplate from 'client/shared/DialogTemplate';
// import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : PropTypes.string,
  closeDialog : PropTypes.func,
  submitRemoveDeliveryAnimalfeed : PropTypes.func,
  open : PropTypes.bool,
  locked : PropTypes.bool,
  error : PropTypes.bool,
  errorMessage : PropTypes.string,
  intl: React.PropTypes.object,
  deliveryAnimlfeed : PropTypes.object
};
const defaultProps = { };

class DialogDeliveryAnimalfeedRemove extends Component { // eslint-disable-line react/prefer-stateless-function
  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitRemoveDeliveryAnimalfeed } = this.props;

    submitRemoveDeliveryAnimalfeed();
  }

  render() {
    const { open, locked, error, errorMessage, deliveryAnimlfeed, intl } = this.props;

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
          title={intl.formatMessage(messages.title)}
          actions={actions}
          modal
          open={open}
          errorMessage={error ? errorMessage : null}

        >
          <div className='dialog-form'>
            <FormattedMessage {...messages.message}
              values={{ name: <b>{deliveryAnimlfeed && deliveryAnimlfeed.name}</b>,
                id: <b>{deliveryAnimlfeed && deliveryAnimlfeed.id}</b> }}
            />
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogDeliveryAnimalfeedRemove.propTypes = propTypes;
DialogDeliveryAnimalfeedRemove.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogDeliveryAnimalfeedRemove));
