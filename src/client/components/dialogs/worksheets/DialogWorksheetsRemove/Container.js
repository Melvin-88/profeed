/**
*
* Worksheets
*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

const propTypes = {
  worksheet : PropTypes.object,
  closeDialog : PropTypes.func,
  submit : PropTypes.func,
  open : PropTypes.bool,
  locked : PropTypes.bool,
  error : PropTypes.bool,
  errorMessage : PropTypes.string,
  intl : PropTypes.object
};
const defaultProps = { };

class DialogWorksheetsRemove extends Component { // eslint-disable-line react/prefer-stateless-function
  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submit, worksheet } = this.props;

    submit(worksheet);
  }

  render() {
    const { open, locked, error, errorMessage, intl, worksheet } = this.props;

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
            {
              worksheet ?
                <FormattedMessage
                  {...messages.message}
                  values={{ name: <b> { worksheet.name } </b>, id: <b> {worksheet.id} </b> }}
                />
                : null
            }
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogWorksheetsRemove.propTypes = propTypes;
DialogWorksheetsRemove.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogWorksheetsRemove));
