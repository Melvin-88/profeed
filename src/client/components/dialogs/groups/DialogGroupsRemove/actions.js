/*
* DialogGroupsRemove Actions
*
* This contains all the text for the DialogGroupsRemove component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_GROUPS_CLOSE = 'DialogGroupsRemove/DIALOG_GROUPS_CLOSE';
export const DIALOG_GROUPS_OPEN = 'DialogGroupsRemove/DIALOG_GROUPS_OPEN';
export const DIALOG_GROUPS_SUBMIT = 'DialogGroupsRemove/DIALOG_GROUPS_SUBMIT';
export const DIALOG_GROUPS_SUBMIT_SUCCESS = 'DialogGroupsRemove/DIALOG_GROUPS_SUBMIT_SUCCESS';
export const DIALOG_GROUPS_SUBMIT_ERROR = 'DialogGroupsRemove/DIALOG_GROUPS_SUBMIT_ERROR';

function closeDialog() {
  return { type : DIALOG_GROUPS_CLOSE };
}

function openDialog(groups) {
  return { type : DIALOG_GROUPS_OPEN, payload : { groups } };
}

function submitRemoveGroup(group) {
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
  return bindActionCreators({ closeDialog, openDialog, submitRemoveGroup, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitRemoveGroup, responseError, responseSuccess };
