/*
* UserGroupsPage Actions
*
* This contains all the text for the UserGroupsPage component.
*/
import { bindActionCreators } from 'redux';
export const USER_GROUPS_PAGE_GET = 'UserGroupsPage/USER_GROUPS_PAGE_GET';
export const USER_GROUPS_PAGE_SET = 'UserGroupsPage/USER_GROUPS_PAGE_SET';
export const USER_GROUPS_PAGE_CALL_SHOW_ADD_DIALOG = 'UserGroupsPage/USER_GROUPS_PAGE_CALL_SHOW_ADD_DIALOG';
export const USER_GROUPS_PAGE_CALL_SHOW_EDIT_DIALOG = 'UserGroupsPage/USER_GROUPS_PAGE_CALL_SHOW_EDIT_DIALOG';
export const USER_GROUPS_PAGE_CALL_SHOW_EDIT_PERMISSION_DIALOG =
  'UserGroupsPage/USER_GROUPS_PAGE_CALL_SHOW_EDIT_PERMISSION_DIALOG';
export const USER_GROUPS_PAGE_CALL_SHOW_REMOVE_DIALOG = 'UserGroupsPage/USER_GROUPS_PAGE_CALL_SHOW_REMOVE_DIALOG';
export const USER_GROUPS_PAGE_GET_GROUPS_SETTINGS = 'UserGroupsPage/USER_GROUPS_PAGE_GET_GROUPS_SETTINGS';
export const USER_GROUPS_PAGE_SET_GROUPS_SETTINGS = 'UserGroupsPage/USER_GROUPS_PAGE_SET_GROUPS_SETTINGS';

function getUserGroups() {
  return { type : USER_GROUPS_PAGE_GET };
}

function setUserGroups(usergroups) {
  return { type :USER_GROUPS_PAGE_SET, payload : { usergroups } };
}

function showUserGroupsAddDialog() {
  return { type : USER_GROUPS_PAGE_CALL_SHOW_ADD_DIALOG };
}

function showUserGroupsEditDialog(usergroups) {
  return { type : USER_GROUPS_PAGE_CALL_SHOW_EDIT_DIALOG, payload : { usergroups } };
}

function showUserGroupsRemoveDialog(usergroups) {
  return { type : USER_GROUPS_PAGE_CALL_SHOW_REMOVE_DIALOG, payload : { usergroups } };
}

function showUserGroupsEditPermissionsDialog(usergroup) {
  return { type : USER_GROUPS_PAGE_CALL_SHOW_EDIT_PERMISSION_DIALOG, payload : { usergroup } };
}

function getGroupsSettings() {
  return { type : USER_GROUPS_PAGE_GET_GROUPS_SETTINGS };
}

function setGroupsSettings(settings) {
  return { type : USER_GROUPS_PAGE_SET_GROUPS_SETTINGS, payload : { settings } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getUserGroups, setUserGroups, showUserGroupsAddDialog,
    showUserGroupsEditDialog, showUserGroupsRemoveDialog, showUserGroupsEditPermissionsDialog, getGroupsSettings,
    setGroupsSettings }, dispatch);
}

export { containerActions, getUserGroups, setUserGroups, showUserGroupsAddDialog,
    showUserGroupsEditDialog, showUserGroupsRemoveDialog, showUserGroupsEditPermissionsDialog, getGroupsSettings,
  setGroupsSettings };
