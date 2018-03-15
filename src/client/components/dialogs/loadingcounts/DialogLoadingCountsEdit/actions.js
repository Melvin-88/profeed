/*
* LoadingCounts Actions
*
* This contains all the text for the LoadingCounts component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_LOADING_COUNTS_OPEN = 'DialogLoadingCountsEdit/DIALOG_LOADING_COUNTS_OPEN';
export const DIALOG_LOADING_COUNTS_CLOSE = 'DialogLoadingCountsEdit/DIALOG_LOADING_COUNTS_CLOSE';
export const DIALOG_LOADING_COUNTS_SUBMIT = 'DialogLoadingCountsEdit/DIALOG_LOADING_COUNTS_SUBMIT';
export const DIALOG_LOADING_COUNTS_SUBMIT_SUCCESS = 'DialogLoadingCountsEdit/DIALOG_LOADING_COUNTS_SUBMIT_SUCCESS';
export const DIALOG_LOADING_COUNTS_SUBMIT_ERROR = 'DialogLoadingCountsEdit/DIALOG_LOADING_COUNTS_SUBMIT_ERROR';

function openDialog(loadingcount) {
  return { type : DIALOG_LOADING_COUNTS_OPEN, payload : { loadingcount } };
}

function closeDialog() {
  return { type : DIALOG_LOADING_COUNTS_CLOSE };
}

function submit(loadingcount) {
  return { type : DIALOG_LOADING_COUNTS_SUBMIT, payload : { loadingcount } };
}

function responseSuccess() {
  return { type : DIALOG_LOADING_COUNTS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_LOADING_COUNTS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submit, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submit, responseError, responseSuccess };
