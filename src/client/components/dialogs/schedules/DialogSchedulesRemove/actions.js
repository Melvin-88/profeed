/*
* Schedules Actions
*
* This contains all the text for the Schedules component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_SCHEDULES_OPEN = 'DialogSchedulesRemove/DIALOG_SCHEDULES_OPEN';
export const DIALOG_SCHEDULES_CLOSE = 'DialogSchedulesRemove/DIALOG_SCHEDULES_CLOSE';
export const DIALOG_SCHEDULES_SUBMIT = 'DialogSchedulesRemove/DIALOG_SCHEDULES_SUBMIT';
export const DIALOG_SCHEDULES_SUBMIT_SUCCESS = 'DialogSchedulesRemove/DIALOG_SCHEDULES_SUBMIT_SUCCESS';
export const DIALOG_SCHEDULES_SUBMIT_ERROR = 'DialogSchedulesRemove/DIALOG_SCHEDULES_SUBMIT_ERROR';

function openDialog(schedule) {
  return { type : DIALOG_SCHEDULES_OPEN, payload : { schedule } };
}

function closeDialog() {
  return { type : DIALOG_SCHEDULES_CLOSE };
}

function submitRemoveSchedules(schedule) {
  return { type : DIALOG_SCHEDULES_SUBMIT, payload : { schedule } };
}

function responseSuccess() {
  return { type : DIALOG_SCHEDULES_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_SCHEDULES_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitRemoveSchedules, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitRemoveSchedules, responseError, responseSuccess };
