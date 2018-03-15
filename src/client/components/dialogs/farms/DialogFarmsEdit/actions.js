/*
* DialogFarmsEdit Actions
*
* This contains all the text for the DialogFarmsEdit component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_FARMS_CLOSE = 'DialogFarmsEdit/DIALOG_FARMS_CLOSE';
export const DIALOG_FARMS_OPEN = 'DialogFarmsEdit/DIALOG_FARMS_OPEN';
export const DIALOG_FARMS_SUBMIT = 'DialogFarmsEdit/DIALOG_FARMS_SUBMIT';
export const DIALOG_FARMS_SUBMIT_SUCCESS = 'DialogFarmsEdit/DIALOG_FARMS_SUBMIT_SUCCESS';
export const DIALOG_FARMS_SUBMIT_ERROR = 'DialogFarmsEdit/DIALOG_FARMS_SUBMIT_ERROR';

function closeDialog() {
  return { type : DIALOG_FARMS_CLOSE };
}

function openDialog(farm) {
  // console.log('DialogFarmsEdit | actions | openDialog | farm ', farm);
  return { type : DIALOG_FARMS_OPEN, payload : { farm } };
}

function submitEditFarm(farm) {
  // console.log('DialogFarmsEdit | actions | submitEditFarm | farm ', farm);
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
  return bindActionCreators({ closeDialog, openDialog, submitEditFarm, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitEditFarm, responseError, responseSuccess };
