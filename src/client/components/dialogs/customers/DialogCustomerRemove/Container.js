/**
*
* DialogCustomerRemove
*
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : React.PropTypes.string,
  customer : React.PropTypes.object,
  closeDialog : React.PropTypes.func,
  submitRemoveDelivery : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  intl: React.PropTypes.object
};
const defaultProps = { };

class DialogCustomerRemove extends Component { // eslint-disable-line react/prefer-stateless-function

  handleClose() {
    const { closeDialog } = this.props;

    // console.log('DialogDeliveryRemove | handleClose | props ', this.props);
    closeDialog();
  }

  handleSubmit() {
    const { submitRemoveDelivery, customer } = this.props;

    // console.log('DialogDeliveryRemove | handleSubmit | customer ', customer);

    submitRemoveDelivery(customer);
  }

  render() {
    const { open, locked, error, errorMessage, customer, intl } = this.props;
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

    // console.log('DialogDeliveryRemove | render | props ', this.props);

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
              customer ?
                <FormattedMessage
                  {...messages.message}
                  values={{ name: <b> { customer.username } </b>, id: <b> {customer.id} </b> }}
                />
                : null
            }
            {error ? <span className='error-message'>{errorMessage}</span> : ''}
          </div>
        </DialogTemplate>
      </div>
    );
  }
}

DialogCustomerRemove.propTypes = propTypes;
DialogCustomerRemove.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogCustomerRemove));
