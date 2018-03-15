/*
* RationLoadingCounts Actions
*
* This contains all the text for the RationLoadingCounts component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_RATION_LOADING_COUNTS_OPEN = 'DialogRationLoadingCountsAdd/DIALOG_RATION_LOADING_COUNTS_OPEN';
export const DIALOG_RATION_LOADING_COUNTS_CLOSE = 'DialogRationLoadingCountsAdd/DIALOG_RATION_LOADING_COUNTS_CLOSE';
export const DIALOG_RATION_LOADING_COUNTS_SUBMIT = 'DialogRationLoadingCountsAdd/DIALOG_RATION_LOADING_COUNTS_SUBMIT';
export const DIALOG_RATION_LOADING_COUNTS_SUBMIT_SUCCESS =
  'DialogRationLoadingCountsAdd/DIALOG_RATION_LOADING_COUNTS_SUBMIT_SUCCESS';
export const DIALOG_RATION_LOADING_COUNTS_SUBMIT_ERROR =
  'DialogRationLoadingCountsAdd/DIALOG_RATION_LOADING_COUNTS_SUBMIT_ERROR';

function openDialog() {
  return { type : DIALOG_RATION_LOADING_COUNTS_OPEN };
}

function closeDialog() {
  return { type : DIALOG_RATION_LOADING_COUNTS_CLOSE };
}

function submitAddRationLoadingCounts(loading) {
  return { type : DIALOG_RATION_LOADING_COUNTS_SUBMIT, payload : { loading } };
}

function responseSuccess() {
  return { type : DIALOG_RATION_LOADING_COUNTS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_RATION_LOADING_COUNTS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitAddRationLoadingCounts, responseError, responseSuccess },
    dispatch);
}

export { containerActions, closeDialog, openDialog, submitAddRationLoadingCounts, responseError, responseSuccess };
