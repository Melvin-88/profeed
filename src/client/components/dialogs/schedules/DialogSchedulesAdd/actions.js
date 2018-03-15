/*
* Schedules Actions
*
* This contains all the text for the Schedules component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_SCHEDULES_OPEN = 'DialogSchedulesAdd/DIALOG_SCHEDULES_OPEN';
export const DIALOG_SCHEDULES_CLOSE = 'DialogSchedulesAdd/DIALOG_SCHEDULES_CLOSE';
export const DIALOG_SCHEDULES_SUBMIT = 'DialogSchedulesAdd/DIALOG_SCHEDULES_SUBMIT';
export const DIALOG_SCHEDULES_SUBMIT_SUCCESS = 'DialogSchedulesAdd/DIALOG_SCHEDULES_SUBMIT_SUCCESS';
export const DIALOG_SCHEDULES_SUBMIT_ERROR = 'DialogSchedulesAdd/DIALOG_SCHEDULES_SUBMIT_ERROR';
export const DIALOG_SCHEDULES_GET_RATIONS = 'DialogSchedulesAdd/DIALOG_SCHEDULES_GET_RATIONS';
export const DIALOG_SCHEDULES_SET_RATIONS = 'DialogSchedulesAdd/DIALOG_SCHEDULES_SET_RATIONS';

function openDialog() {
  return { type : DIALOG_SCHEDULES_OPEN };
}

function closeDialog() {
  return { type : DIALOG_SCHEDULES_CLOSE };
}

function submitAddSchedules(schedule) {
  return { type : DIALOG_SCHEDULES_SUBMIT, payload : { schedule } };
}

function responseSuccess() {
  return { type : DIALOG_SCHEDULES_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_SCHEDULES_SUBMIT_ERROR, payload : { errorMessage } };
}

function getRations(farmId) {
  return { type : DIALOG_SCHEDULES_GET_RATIONS, payload : { farmId } };
}

function setRations(rations) {
  return { type : DIALOG_SCHEDULES_SET_RATIONS, payload : { rations } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitAddSchedules, responseError, responseSuccess, getRations,
    setRations }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitAddSchedules, responseError, responseSuccess, getRations,
  setRations
};
