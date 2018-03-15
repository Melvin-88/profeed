/*
* Worksheets Actions
*
* This contains all the text for the Worksheets component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_WORKSHEETS_OPEN = 'DialogWorksheetsEdit/DIALOG_WORKSHEETS_OPEN';
export const DIALOG_WORKSHEETS_CLOSE = 'DialogWorksheetsEdit/DIALOG_WORKSHEETS_CLOSE';
export const DIALOG_WORKSHEETS_SUBMIT = 'DialogWorksheetsEdit/DIALOG_WORKSHEETS_SUBMIT';
export const DIALOG_WORKSHEETS_SUBMIT_SUCCESS = 'DialogWorksheetsEdit/DIALOG_WORKSHEETS_SUBMIT_SUCCESS';
export const DIALOG_WORKSHEETS_SUBMIT_ERROR = 'DialogWorksheetsEdit/DIALOG_WORKSHEETS_SUBMIT_ERROR';

function openDialog(worksheet) {
  return { type : DIALOG_WORKSHEETS_OPEN, payload : { worksheet } };
}

function closeDialog() {
  return { type : DIALOG_WORKSHEETS_CLOSE };
}

function submit(worksheet) {
  return { type : DIALOG_WORKSHEETS_SUBMIT, payload : { worksheet } };
}

function responseSuccess() {
  return { type : DIALOG_WORKSHEETS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_WORKSHEETS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submit, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submit, responseError, responseSuccess };
