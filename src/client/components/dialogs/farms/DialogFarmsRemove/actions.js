/*
* DialogFarmsRemove Actions
*
* This contains all the text for the DialogFarmsRemove component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_FARMS_CLOSE = 'DialogFarmsRemove/DIALOG_FARMS_CLOSE';
export const DIALOG_FARMS_OPEN = 'DialogFarmsRemove/DIALOG_FARMS_OPEN';
export const DIALOG_FARMS_SUBMIT = 'DialogFarmsRemove/DIALOG_FARMS_SUBMIT';
export const DIALOG_FARMS_SUBMIT_SUCCESS = 'DialogFarmsRemove/DIALOG_FARMS_SUBMIT_SUCCESS';
export const DIALOG_FARMS_SUBMIT_ERROR = 'DialogFarmsRemove/DIALOG_FARMS_SUBMIT_ERROR';

function closeDialog() {
  return { type : DIALOG_FARMS_CLOSE };
}

function openDialog(id) {
  return { type : DIALOG_FARMS_OPEN, payload : { farm : id } };
}

function submitRemoveFarm(farm) {
  return { type : DIALOG_FARMS_SUBMIT, payload : { farm } };
}

function responseSuccess() {
  closeDialog();
  return { type : DIALOG_FARMS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_FARMS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitRemoveFarm, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitRemoveFarm, responseError, responseSuccess };
