/*
* DialogTransferAdd Actions
*
* This contains all the text for the DialogTransferAdd component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_TRANSFERS_CLOSE = 'DialogTransfersAdd/DIALOG_TRANSFERS_CLOSE';
export const DIALOG_TRANSFERS_OPEN = 'DialogTransfersAdd/DIALOG_TRANSFERS_OPEN';
export const DIALOG_TRANSFERS_SUBMIT = 'DialogTransfersAdd/DIALOG_TRANSFERS_SUBMIT';
export const DIALOG_TRANSFERS_SUBMIT_SUCCESS = 'DialogTransfersAdd/DIALOG_TRANSFERS_SUBMIT_SUCCESS';
export const DIALOG_TRANSFERS_SUBMIT_ERROR = 'DialogTransfersAdd/DIALOG_TRANSFERS_SUBMIT_ERROR';
export const DIALOG_TRANSFERS_DATA_SELECT_GET = 'DialogTransfersAdd/DIALOG_TRANSFERS_DATA_SELECT_GET';
export const DIALOG_TRANSFERS_DATA_SELECT_SET = 'DialogTransfersAdd/DIALOG_TRANSFERS_DATA_SELECT_SET';

function closeDialog() {
  return { type : DIALOG_TRANSFERS_CLOSE };
}

function openDialog() {
  return { type : DIALOG_TRANSFERS_OPEN };
}

function submitAddTransfer(transfer) {
  return { type : DIALOG_TRANSFERS_SUBMIT, payload : { transfer } };
}

function responseSuccess() {
  closeDialog();
  return { type : DIALOG_TRANSFERS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_TRANSFERS_SUBMIT_ERROR, payload : { errorMessage } };
}

function loadDataForSelects(farmId) {
  return { type : DIALOG_TRANSFERS_DATA_SELECT_GET, payload : { farmId } };
}

function setDataForSelects(payload) {
  return { type : DIALOG_TRANSFERS_DATA_SELECT_SET, payload : { ...payload } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitAddTransfer, responseError, responseSuccess,
    loadDataForSelects, setDataForSelects }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitAddTransfer, responseError, responseSuccess,
  loadDataForSelects, setDataForSelects };
