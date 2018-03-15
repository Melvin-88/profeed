/*
* DialogGroupsAdd Actions
*
* This contains all the text for the DialogGroupsAdd component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_GROUPS_CLOSE = 'DialogGroupsAdd/DIALOG_GROUPS_CLOSE';
export const DIALOG_GROUPS_OPEN = 'DialogGroupsAdd/DIALOG_GROUPS_OPEN';
export const DIALOG_GROUPS_SUBMIT = 'DialogGroupsAdd/DIALOG_GROUPS_SUBMIT';
export const DIALOG_GROUPS_SUBMIT_SUCCESS = 'DialogGroupsAdd/DIALOG_GROUPS_SUBMIT_SUCCESS';
export const DIALOG_GROUPS_SUBMIT_ERROR = 'DialogGroupsAdd/DIALOG_GROUPS_SUBMIT_ERROR';

function closeDialog() {
  return { type : DIALOG_GROUPS_CLOSE };
}

function openDialog() {
  return { type : DIALOG_GROUPS_OPEN };
}

function submitAddGroup(group) {
  return { type : DIALOG_GROUPS_SUBMIT, payload : { group } };
}

function responseSuccess() {
  closeDialog();
  return { type : DIALOG_GROUPS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_GROUPS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitAddGroup, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitAddGroup, responseError, responseSuccess };
