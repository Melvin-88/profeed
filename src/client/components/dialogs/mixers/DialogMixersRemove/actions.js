/*
* Mixers Actions
*
* This contains all the text for the Mixers component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_MIXERS_OPEN = 'DialogMixersRemove/DIALOG_MIXERS_OPEN';
export const DIALOG_MIXERS_CLOSE = 'DialogMixersRemove/DIALOG_MIXERS_CLOSE';
export const DIALOG_MIXERS_SUBMIT = 'DialogMixersRemove/DIALOG_MIXERS_SUBMIT';
export const DIALOG_MIXERS_SUBMIT_SUCCESS = 'DialogMixersRemove/DIALOG_MIXERS_SUBMIT_SUCCESS';
export const DIALOG_MIXERS_SUBMIT_ERROR = 'DialogMixersRemove/DIALOG_MIXERS_SUBMIT_ERROR';

function openDialog(mixer) {
  return { type : DIALOG_MIXERS_OPEN, payload : { mixer } };
}

function closeDialog() {
  return { type : DIALOG_MIXERS_CLOSE };
}

function submitRemoveMixers(mixer) {
  return { type : DIALOG_MIXERS_SUBMIT, payload : { mixer } };
}

function responseSuccess() {
  return { type : DIALOG_MIXERS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_MIXERS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitRemoveMixers, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitRemoveMixers, responseError, responseSuccess };
