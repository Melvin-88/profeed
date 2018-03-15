/**
*
* Rationgroups
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
  submitData : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  group : React.PropTypes.object,
  intl: React.PropTypes.object
};
const defaultProps = { };

class DialogRationGroupsRemove extends Component { // eslint-disable-line react/prefer-stateless-function
  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitData, group } = this.props;

    submitData(group);
  }

  contentPrepare(group) {
    return (<span className='dialog-form__label'>
      Ви підтверджуєте видалення інгредієнта {group.name} з раціону?
    </span>);
  }

  render() {
    const { open, locked, error, errorMessage, group, intl } = this.props;

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
              group ?
                <FormattedMessage
                  {...messages.message}
                  values={{ name: <b> { group.name } </b>, id: <b> {group.id} </b> }}
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

DialogRationGroupsRemove.propTypes = propTypes;
DialogRationGroupsRemove.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogRationGroupsRemove));
