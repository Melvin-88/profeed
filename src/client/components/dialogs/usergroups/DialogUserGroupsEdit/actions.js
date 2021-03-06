/*
* UserGroups Actions
*
* This contains all the text for the UserGroups component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_USER_GROUPS_OPEN = 'DialogUserGroupsEdit/DIALOG_USER_GROUPS_OPEN';
export const DIALOG_USER_GROUPS_CLOSE = 'DialogUserGroupsEdit/DIALOG_USER_GROUPS_CLOSE';
export const DIALOG_USER_GROUPS_SUBMIT = 'DialogUserGroupsEdit/DIALOG_USER_GROUPS_SUBMIT';
export const DIALOG_USER_GROUPS_SUBMIT_SUCCESS = 'DialogUserGroupsEdit/DIALOG_USER_GROUPS_SUBMIT_SUCCESS';
export const DIALOG_USER_GROUPS_SUBMIT_ERROR = 'DialogUserGroupsEdit/DIALOG_USER_GROUPS_SUBMIT_ERROR';

function openDialog(group) {
  return { type : DIALOG_USER_GROUPS_OPEN, payload : { group } };
}

function closeDialog() {
  return { type : DIALOG_USER_GROUPS_CLOSE };
}

function submit(group) {
  return { type : DIALOG_USER_GROUPS_SUBMIT, payload : { group } };
}

function responseSuccess() {
  return { type : DIALOG_USER_GROUPS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_USER_GROUPS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submit, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submit, responseError, responseSuccess };
