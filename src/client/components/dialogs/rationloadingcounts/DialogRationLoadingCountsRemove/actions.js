/*
* RationLoadingCounts Actions
*
* This contains all the text for the RationLoadingCounts component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_RATION_LOADING_COUNTS_OPEN = 'DialogRationLoadingCountsRemove/DIALOG_RATION_LOADING_COUNTS_OPEN';
export const DIALOG_RATION_LOADING_COUNTS_CLOSE = 'DialogRationLoadingCountsRemove/DIALOG_RATION_LOADING_COUNTS_CLOSE';
export const DIALOG_RATION_LOADING_COUNTS_SUBMIT = 'DialogRationLoadingCountsRemove/DIALOG_RATION_LOADING_COUNTS_SUBMIT';
export const DIALOG_RATION_LOADING_COUNTS_SUBMIT_SUCCESS =
  'DialogRationLoadingCountsRemove/DIALOG_RATION_LOADING_COUNTS_SUBMIT_SUCCESS';
export const DIALOG_RATION_LOADING_COUNTS_SUBMIT_ERROR =
  'DialogRationLoadingCountsRemove/DIALOG_RATION_LOADING_COUNTS_SUBMIT_ERROR';

function openDialog(loadingCount) {
  return { type : DIALOG_RATION_LOADING_COUNTS_OPEN, payload : { loadingCount } };
}

function closeDialog() {
  return { type : DIALOG_RATION_LOADING_COUNTS_CLOSE };
}

function submitRemoveRationLoadingCounts(loading) {
  return { type : DIALOG_RATION_LOADING_COUNTS_SUBMIT, payload : { loading } };
}

function responseSuccess() {
  return { type : DIALOG_RATION_LOADING_COUNTS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_RATION_LOADING_COUNTS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitRemoveRationLoadingCounts, responseError, responseSuccess }
  , dispatch);
}

export { containerActions, closeDialog, openDialog, submitRemoveRationLoadingCounts, responseError, responseSuccess };
