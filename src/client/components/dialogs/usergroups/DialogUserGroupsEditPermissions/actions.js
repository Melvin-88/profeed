/*
* UserGroups Actions
*
* This contains all the text for the UserGroups component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_USER_GROUPS_OPEN = 'DialogUserGroupsEditPermissions/DIALOG_USER_GROUPS_OPEN';
export const DIALOG_USER_GROUPS_CLOSE = 'DialogUserGroupsEditPermissions/DIALOG_USER_GROUPS_CLOSE';
export const DIALOG_USER_GROUPS_SUBMIT = 'DialogUserGroupsEditPermissions/DIALOG_USER_GROUPS_SUBMIT';
export const DIALOG_USER_GROUPS_SUBMIT_SUCCESS = 'DialogUserGroupsEditPermissions/DIALOG_USER_GROUPS_SUBMIT_SUCCESS';
export const DIALOG_USER_GROUPS_SUBMIT_ERROR = 'DialogUserGroupsEditPermissions/DIALOG_USER_GROUPS_SUBMIT_ERROR';

function openDialog(usergroup) {
  return { type : DIALOG_USER_GROUPS_OPEN, payload : { usergroup } };
}

function closeDialog() {
  return { type : DIALOG_USER_GROUPS_CLOSE };
}

function submitEditPermissionsUserGroups(usergroup) {
  return { type : DIALOG_USER_GROUPS_SUBMIT, payload : { usergroup } };
}

function responseSuccess() {
  return { type : DIALOG_USER_GROUPS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_USER_GROUPS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitEditPermissionsUserGroups, responseError, responseSuccess },
    dispatch);
}

export { containerActions, closeDialog, openDialog, submitEditPermissionsUserGroups, responseError, responseSuccess };
