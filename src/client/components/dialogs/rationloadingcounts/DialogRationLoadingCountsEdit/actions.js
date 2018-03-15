/*
* RationLoadingCounts Actions
*
* This contains all the text for the RationLoadingCounts component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_RATION_LOADING_COUNTS_OPEN = 'DialogRationLoadingCountsEdit/DIALOG_RATION_LOADING_COUNTS_OPEN';
export const DIALOG_RATION_LOADING_COUNTS_CLOSE = 'DialogRationLoadingCountsEdit/DIALOG_RATION_LOADING_COUNTS_CLOSE';
export const DIALOG_RATION_LOADING_COUNTS_SUBMIT = 'DialogRationLoadingCountsEdit/DIALOG_RATION_LOADING_COUNTS_SUBMIT';
export const DIALOG_RATION_LOADING_COUNTS_SUBMIT_SUCCESS =
  'DialogRationLoadingCountsEdit/DIALOG_RATION_LOADING_COUNTS_SUBMIT_SUCCESS';
export const DIALOG_RATION_LOADING_COUNTS_SUBMIT_ERROR =
  'DialogRationLoadingCountsEdit/DIALOG_RATION_LOADING_COUNTS_SUBMIT_ERROR';

function openDialog(loadingCount) {
  return { type : DIALOG_RATION_LOADING_COUNTS_OPEN, payload : { loadingCount } };
}

function closeDialog() {
  return { type : DIALOG_RATION_LOADING_COUNTS_CLOSE };
}

function submitEditRationLoadingCounts(loading) {
  return { type : DIALOG_RATION_LOADING_COUNTS_SUBMIT, payload : { loading } };
}

function responseSuccess() {
  return { type : DIALOG_RATION_LOADING_COUNTS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_RATION_LOADING_COUNTS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitEditRationLoadingCounts, responseError, responseSuccess },
    dispatch);
}

export { containerActions, closeDialog, openDialog, submitEditRationLoadingCounts, responseError, responseSuccess };
