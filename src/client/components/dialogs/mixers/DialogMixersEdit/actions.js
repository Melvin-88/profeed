/*
* Mixers Actions
*
* This contains all the text for the Mixers component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_MIXERS_OPEN = 'DialogMixersEdit/DIALOG_MIXERS_OPEN';
export const DIALOG_MIXERS_CLOSE = 'DialogMixersEdit/DIALOG_MIXERS_CLOSE';
export const DIALOG_MIXERS_SUBMIT = 'DialogMixersEdit/DIALOG_MIXERS_SUBMIT';
export const DIALOG_MIXERS_SUBMIT_SUCCESS = 'DialogMixersEdit/DIALOG_MIXERS_SUBMIT_SUCCESS';
export const DIALOG_MIXERS_SUBMIT_ERROR = 'DialogMixersEdit/DIALOG_MIXERS_SUBMIT_ERROR';

/**
 *
 * @param mixer
 * @return {{type: string, payload: {mixer: *}}}
 */
function openDialog(mixer) {
  return { type : DIALOG_MIXERS_OPEN, payload : { mixer } };
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
 * @return {{type: string}}
 */
function submitEditMixers(mixer) {
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
  return bindActionCreators({ closeDialog, openDialog, submitEditMixers, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitEditMixers, responseError, responseSuccess };

