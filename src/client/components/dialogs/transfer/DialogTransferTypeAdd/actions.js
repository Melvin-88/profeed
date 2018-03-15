/*
* DialogTransferTypeAdd Actions
*
* This contains all the text for the DialogTransferTypeAdd component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_TRANSFERS_TYPE_CLOSE = 'DialogTransferTypeAdd/DIALOG_TRANSFERS_TYPE_CLOSE';
export const DIALOG_TRANSFERS_TYPE_OPEN = 'DialogTransferTypeAdd/DIALOG_TRANSFERS_TYPE_OPEN';
export const DIALOG_TRANSFERS_TYPE_SUBMIT = 'DialogTransferTypeAdd/DIALOG_TRANSFERS_TYPE_SUBMIT';
export const DIALOG_TRANSFERS_TYPE_SUBMIT_SUCCESS = 'DialogTransferTypeAdd/DIALOG_TRANSFERS_TYPE_SUBMIT_SUCCESS';
export const DIALOG_TRANSFERS_TYPE_SUBMIT_ERROR = 'DialogTransferTypeAdd/DIALOG_TRANSFERS_TYPE_SUBMIT_ERROR';

function closeDialog() {
  return { type : DIALOG_TRANSFERS_TYPE_CLOSE };
}

function openDialog() {
  return { type : DIALOG_TRANSFERS_TYPE_OPEN };
}

function submitAddTypeTransfer(transfer) {
  return { type : DIALOG_TRANSFERS_TYPE_SUBMIT, payload : { transfer } };
}

function responseSuccess() {
  closeDialog();
  return { type : DIALOG_TRANSFERS_TYPE_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_TRANSFERS_TYPE_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitAddTypeTransfer, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitAddTypeTransfer, responseError, responseSuccess };
