/**
*
* UserGroupsPage
*
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TableUserGroups from 'client/components/tables/TableUserGroups';
import DialogUserGroupsAdd from 'client/components/dialogs/usergroups/DialogUserGroupsAdd';
import DialogUserGroupsEdit from 'client/components/dialogs/usergroups/DialogUserGroupsEdit';
import DialogUserGroupsRemove from 'client/components/dialogs/usergroups/DialogUserGroupsRemove';
import DialogUserGroupsEditPermissions from 'client/components/dialogs/usergroups/DialogUserGroupsEditPermissions';

const propTypes = {
  permission : PropTypes.object,
  usergroups : PropTypes.array,
  settings : PropTypes.array,
  getUserGroups : PropTypes.func,
  getGroupsSettings : PropTypes.func,
  showUserGroupsAddDialog : PropTypes.func,
  showUserGroupsEditDialog : PropTypes.func,
  showUserGroupsRemoveDialog : PropTypes.func,
  showUserGroupsEditPermissionsDialog : PropTypes.func
};
const defaultProps = { };

class UserGroupsPage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      checkedUserGroup : null
    };
  }

  componentDidMount() {
    const { getUserGroups, getGroupsSettings } = this.props;

    getUserGroups();
    getGroupsSettings();
  }

  componentWillReceiveProps(nextProps) {
    const { usergroups } = this.props;
    const { usergroups : newUserGroups } = nextProps;

    if (usergroups && usergroups !== newUserGroups) {
      this.setState({ checkedUserGroup : null });
    }
  }

  handleChangeCheckedRow(row) {
    this.setState({
      checkedUserGroup : this.state.checkedUserGroup === row ? null : row
    });
  }
// Handlers for click
  handleAddUserGroupsModal() {
    const { showUserGroupsAddDialog } = this.props;

    showUserGroupsAddDialog();
  }

  handleEditUserGroupsModal() {
    const { showUserGroupsEditDialog, usergroups } = this.props;
    const { checkedUserGroup } = this.state;
    const group = usergroups.find((item) => item.id === checkedUserGroup);

    showUserGroupsEditDialog(group);
  }

  handleRemoveUserGroupsModal() {
    const { showUserGroupsRemoveDialog, usergroups } = this.props;
    const { checkedUserGroup } = this.state;
    const group = usergroups.find((item) => item.id === checkedUserGroup);

    showUserGroupsRemoveDialog(group);
  }

  handleEditPermissionModal(id) {
    const { showUserGroupsEditPermissionsDialog, usergroups } = this.props;

    showUserGroupsEditPermissionsDialog(usergroups.find((item) => item.id === id));
  }

  render() {
    const { usergroups, settings, permission } = this.props;
    const { checkedUserGroup } = this.state;

    return permission && permission.view ? (
      <div className='user-groups-page-container'>
        <div className='page-title'>
          <h1>
            { <FormattedMessage {...messages.title} />}
          </h1>
        </div>
        {permission.add ? (
          <RaisedButton
            className='page-button button-add'
            label={<FormattedMessage {...messages.button.add} />}
            primary
            onTouchTap={::this.handleAddUserGroupsModal}
          />) : null}
        {permission.change ? (
          <RaisedButton
            className={`page-button  ${checkedUserGroup ? 'button-edit' : ''}`}
            label={<FormattedMessage {...messages.button.edit} />}
            onTouchTap={::this.handleEditUserGroupsModal}
            disabled={!checkedUserGroup}
          />) : null}
        {permission.delete ? (
          <RaisedButton
            className={`page-button ${checkedUserGroup ? 'button-remove' : ''}`}
            label={<FormattedMessage {...messages.button.remove} />}
            onTouchTap={::this.handleRemoveUserGroupsModal}
            disabled={!checkedUserGroup}
          />) : null}
        <br />
        <TableUserGroups tableData={usergroups} onChangeCheckedRow={::this.handleChangeCheckedRow} checked={checkedUserGroup}
          onEditPermission={::this.handleEditPermissionModal} canChecked={permission.change || permission.delete}
        />
        <br/>

        {permission.add ? <DialogUserGroupsAdd settings={settings}/> : null}
        {permission.change ? <DialogUserGroupsEdit settings={settings}/> : null}
        {permission.delete ? <DialogUserGroupsRemove /> : null}
        {permission.change ? <DialogUserGroupsEditPermissions /> : null}
      </div>
    ) : null;
  }
}

UserGroupsPage.propTypes = propTypes;
UserGroupsPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(UserGroupsPage);
