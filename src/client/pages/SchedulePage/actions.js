/*
* SchedulePage Actions
*
* This contains all the text for the SchedulePage component.
*/
import { bindActionCreators } from 'redux';
import { actions as rationsActions } from 'client/pages/RationsPage';
import { actions as loadingcountsActions } from 'client/components/tables/TableRationLoadingCounts';
export const SCHEDULE_PAGE_GET = 'SchedulePage/SCHEDULE_PAGE_GET';
export const SCHEDULE_PAGE_SET = 'SchedulePage/SCHEDULE_PAGE_SET';
export const SCHEDULE_PAGE_COEFFICIENT_CHANGE = 'SchedulePage/SCHEDULE_PAGE_COEFFICIENT_CHANGE';
export const SCHEDULE_PAGE_SAVE_SCHEDULE = 'SchedulePage/SCHEDULE_PAGE_SAVE_SCHEDULE';
export const SCHEDULE_PAGE_EXIT = 'SchedulePage/SCHEDULE_PAGE_EXIT';

function getSchedule(scheduleId) {
  return { type : SCHEDULE_PAGE_GET, payload : { scheduleId } };
}

function setSchedule(schedule) {
  return { type :SCHEDULE_PAGE_SET, payload : { schedule } };
}

function getRations(farmId) {
  return rationsActions.getRations(farmId);
}

function getLoadingCounts(farmId) {
  return loadingcountsActions.getLoadingCounts(farmId);
}

function changeCoefficient(coefficient) {
  return { type : SCHEDULE_PAGE_COEFFICIENT_CHANGE, payload : { coefficient } };
}

function saveSchedule(schedule) {
  return { type : SCHEDULE_PAGE_SAVE_SCHEDULE, payload : { schedule } };
}

function exit(farm) {
  return { type : SCHEDULE_PAGE_EXIT, payload : { farm } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getSchedule, setSchedule, changeCoefficient, getRations, getLoadingCounts,
    saveSchedule, exit }, dispatch);
}

export { containerActions, getSchedule, setSchedule, changeCoefficient, getRations, getLoadingCounts,
  saveSchedule, exit
};
