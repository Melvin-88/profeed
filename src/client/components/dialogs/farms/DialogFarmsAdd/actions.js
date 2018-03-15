/*
* FarmsDialog Actions
*
* This contains all the text for the FarmsDialog component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_FARMS_CLOSE = 'DialogFarmsAdd/DIALOG_FARMS_CLOSE';
export const DIALOG_FARMS_OPEN = 'DialogFarmsAdd/DIALOG_FARMS_OPEN';
export const DIALOG_FARMS_SUBMIT = 'DialogFarmsAdd/DIALOG_FARMS_SUBMIT';
export const DIALOG_FARMS_SUBMIT_SUCCESS = 'DialogFarmsAdd/DIALOG_FARMS_SUBMIT_SUCCESS';
export const DIALOG_FARMS_SUBMIT_ERROR = 'DialogFarmsAdd/DIALOG_FARMS_SUBMIT_ERROR';

function closeDialog() {
  return { type : DIALOG_FARMS_CLOSE };
}

function openDialog() {
  return { type : DIALOG_FARMS_OPEN };
}

function submitAddFarm(farm) {
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
  return bindActionCreators({ closeDialog, openDialog, submitAddFarm, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitAddFarm, responseError, responseSuccess };
