/**
*
* UserGroups
*
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import PermissionEditable from 'client/shared/PermissionsEditable';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  closeDialog : PropTypes.func,
  submitEditPermissionsUserGroups : PropTypes.func,
  open : PropTypes.bool,
  locked : PropTypes.bool,
  error : PropTypes.bool,
  errorMessage : PropTypes.string,
  usergroup : PropTypes.object,
  intl: PropTypes.object
};
const defaultProps = { };

class DialogUserGroupsEditPermissions extends Component { // eslint-disable-line react/prefer-stateless-function
  state = { permissions : [] };

  componentWillReceiveProps(nextProps) {
    const { open } = this.props;
    const { open : openNext, usergroup } = nextProps;

    if (!open && (open !== openNext)) {
      this.setState({
        permissions : [ ...usergroup.settings ]
      });
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitEditPermissionsUserGroups, usergroup } = this.props;

    submitEditPermissionsUserGroups({ ...usergroup, settings : [ ...this.state.permissions ] });
  }

  handleChangePermission(id, prop, value) {
    const { permissions } = this.state;
    const permission = permissions.find((item) => item.id === id);

    console.log('ARGS : ', id, prop, value, permission);

    if (!permission) return;

    permission[prop] = value;

    permissions.splice(permissions.findIndex((item) => item.id === id), 1, permission);

    this.setState({
      permissions : [ ...permissions ]
    });
  }

  render() {
    const { open, locked, error, errorMessage, usergroup, intl } = this.props;

    console.log('usergroup : ', usergroup);

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
        label={<FormattedMessage {...messages.button.edit} />}
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
          autoScrollBodyContent
          modal
          open={open}
          errorMessage={error ? errorMessage : null}

        >
          <div className='dialog-form'>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.editPermissionGroup)}
            </span>
            <PermissionEditable permission={this.state.permissions} onChecked={::this.handleChangePermission}/>
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogUserGroupsEditPermissions.propTypes = propTypes;
DialogUserGroupsEditPermissions.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogUserGroupsEditPermissions));
