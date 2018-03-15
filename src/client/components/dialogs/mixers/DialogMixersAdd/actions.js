/*
* Mixers Actions
*
* This contains all the text for the Mixers component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_MIXERS_OPEN = 'DialogMixersAdd/DIALOG_MIXERS_OPEN';
export const DIALOG_MIXERS_CLOSE = 'DialogMixersAdd/DIALOG_MIXERS_CLOSE';
export const DIALOG_MIXERS_SUBMIT = 'DialogMixersAdd/DIALOG_MIXERS_SUBMIT';
export const DIALOG_MIXERS_SUBMIT_SUCCESS = 'DialogMixersAdd/DIALOG_MIXERS_SUBMIT_SUCCESS';
export const DIALOG_MIXERS_SUBMIT_ERROR = 'DialogMixersAdd/DIALOG_MIXERS_SUBMIT_ERROR';

/**
 *
 * @return {{type: string}}
 */
function openDialog() {
  return { type : DIALOG_MIXERS_OPEN };
}
/**
 *
 * @return {{type: string}}
 */
function closeDialog() {
  return { type : DIALOG_MIXERS_CLOSE };
}
/**
 *
 * @param mixer
 * @return {{type: string, payload: {mixer: *}}}
 */
function submitAddMixers(mixer) {
  return { type : DIALOG_MIXERS_SUBMIT, payload : { mixer } };
}
/**
 *
 * @return {{type: string}}
 */
function responseSuccess() {
  return { type : DIALOG_MIXERS_SUBMIT_SUCCESS };
}
/**
 *
 * @param errorMessage
 * @return {{type: string, payload: {errorMessage: *}}}
 */
function responseError(errorMessage) {
  return { type : DIALOG_MIXERS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitAddMixers, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitAddMixers, responseError, responseSuccess };
