/*
* DialogGroupsEdit Actions
*
* This contains all the text for the DialogGroupsEdit component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_GROUPS_CLOSE = 'DialogGroupsEdit/DIALOG_GROUPS_CLOSE';
export const DIALOG_GROUPS_OPEN = 'DialogGroupsEdit/DIALOG_GROUPS_OPEN';
export const DIALOG_GROUPS_SUBMIT = 'DialogGroupsEdit/DIALOG_GROUPS_SUBMIT';
export const DIALOG_GROUPS_SUBMIT_SUCCESS = 'DialogGroupsEdit/DIALOG_GROUPS_SUBMIT_SUCCESS';
export const DIALOG_GROUPS_SUBMIT_ERROR = 'DialogGroupsEdit/DIALOG_GROUPS_SUBMIT_ERROR';

function closeDialog() {
  return { type : DIALOG_GROUPS_CLOSE };
}

function openDialog(group) {
  return { type : DIALOG_GROUPS_OPEN, payload : { group } };
}

function submitEditGroup(group) {
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
  return bindActionCreators({ closeDialog, openDialog, submitEditGroup, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitEditGroup, responseError, responseSuccess };
