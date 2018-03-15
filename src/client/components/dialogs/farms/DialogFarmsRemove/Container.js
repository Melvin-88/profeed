/**
*
* DialogFarmsRemove
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  closeDialog : PropTypes.func,
  submitRemoveFarm : PropTypes.func,
  open : PropTypes.bool,
  locked : PropTypes.bool,
  error : PropTypes.bool,
  errorMessage : PropTypes.string,
  farm : PropTypes.object,
  intl : PropTypes.object
};

const defaultProps = { };

class DialogFarmsRemove extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { farm } = this.props;

    // console.log('Submit id : ', farm);

    if (!farm) {
      return;
    }
    const { submitRemoveFarm } = this.props;

    submitRemoveFarm(farm);
  }

  render() {
    const { open, locked, farm, error, errorMessage, intl } = this.props;

    // console.log('DialogFarmRemove | render | props ', this.props);

    const actions = [
      <FlatButton
        key='1'
        label={<FormattedMessage {...messages.button.cancel} />}
        disabled={locked}
        secondary
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        key='2'
        label={<FormattedMessage {...messages.button.remove} />}
        disabled={locked}
        primary
        onTouchTap={this.handleSubmit}
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
            {farm ?
              <FormattedMessage {...messages.message}
                values={{ name: <b> { farm.name } </b>, id: <b> {farm.id} </b> }}
              /> : ''}
            { error ? <span className='error-message'>{errorMessage}</span> : '' }
          </div>
        </DialogTemplate>
      </div>
    );
  }
}

DialogFarmsRemove.propTypes = propTypes;
DialogFarmsRemove.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogFarmsRemove));
