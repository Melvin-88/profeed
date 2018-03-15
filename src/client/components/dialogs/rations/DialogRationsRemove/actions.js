/*
* Rations Actions
*
* This contains all the text for the Rations component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_RATIONS_OPEN = 'DialogRationsRemove/DIALOG_RATIONS_OPEN';
export const DIALOG_RATIONS_CLOSE = 'DialogRationsRemove/DIALOG_RATIONS_CLOSE';
export const DIALOG_RATIONS_SUBMIT = 'DialogRationsRemove/DIALOG_RATIONS_SUBMIT';
export const DIALOG_RATIONS_SUBMIT_SUCCESS = 'DialogRationsRemove/DIALOG_RATIONS_SUBMIT_SUCCESS';
export const DIALOG_RATIONS_SUBMIT_ERROR = 'DialogRationsRemove/DIALOG_RATIONS_SUBMIT_ERROR';

function openDialog(ration) {
  return { type : DIALOG_RATIONS_OPEN, payload : { ration } };
}

function closeDialog() {
  return { type : DIALOG_RATIONS_CLOSE };
}

function submitRemoveRations(ration) {
  return { type : DIALOG_RATIONS_SUBMIT, payload : { ration } };
}

function responseSuccess() {
  return { type : DIALOG_RATIONS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_RATIONS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitRemoveRations, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitRemoveRations, responseError, responseSuccess };
