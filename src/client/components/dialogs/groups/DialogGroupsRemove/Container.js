/**
*
* DialogGroupsRemove
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
  groups : React.PropTypes.object,
  closeDialog : React.PropTypes.func,
  submitRemoveGroup : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  intl: React.PropTypes.object
};
const defaultProps = { };

class DialogGroupsRemove extends Component { // eslint-disable-line react/prefer-stateless-function

  handleClose() {
    const { closeDialog } = this.props;

    // console.log('DialogGroupsRemove | handleClose | props ', this.props);
    closeDialog();
  }

  handleSubmit() {
    const { submitRemoveGroup, groups } = this.props;

    // console.log('DialogGroupsRemove | handleSubmit | groups ', groups);

    submitRemoveGroup(groups);
  }

  render() {
    const { open, locked, groups, error, errorMessage, intl } = this.props;
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

    // console.log('DialogGroupsRemove | render | props ', this.props);

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
              groups ?
                <div className='dialog-form'>
                  <FormattedMessage {...messages.message}
                    values={{ name: <b> { groups.name } </b>, id: <b> {groups.id} </b> }}
                  />
                </div>
                : null
            }
            {error ? <span className='error-message'>{errorMessage}</span> : ''}
          </div>
        </DialogTemplate>
      </div>
    );
  }
}

DialogGroupsRemove.propTypes = propTypes;
DialogGroupsRemove.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogGroupsRemove));
