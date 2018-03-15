/**
*
* Animalfeeds
*
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : PropTypes.string,
  closeDialog : PropTypes.func,
  submitRemoveAnimalfeeds : PropTypes.func,
  open : PropTypes.bool,
  locked : PropTypes.bool,
  error : PropTypes.bool,
  errorMessage : PropTypes.string,
  intl : PropTypes.object,
  animalfeed : PropTypes.object
};
const defaultProps = { };

class DialogAnimalfeedsRemove extends Component { // eslint-disable-line react/prefer-stateless-function
  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitRemoveAnimalfeeds, animalfeed } = this.props;

    submitRemoveAnimalfeeds(animalfeed.id);
  }

  render() {
    const { open, locked, error, errorMessage, intl, animalfeed } = this.props;

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
        label={<FormattedMessage {...messages.button.remove}/>}
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
            <FormattedMessage {...messages.message} values={{ name: <b>{animalfeed && animalfeed.ingredient_name}</b>,
              id: <b>{animalfeed && animalfeed.ingredient}</b> }}
            />
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogAnimalfeedsRemove.propTypes = propTypes;
DialogAnimalfeedsRemove.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogAnimalfeedsRemove));
