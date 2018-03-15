/*
* SchedulesPage Actions
*
* This contains all the text for the SchedulesPage component.
*/
import { bindActionCreators } from 'redux';
import { actions as loadingCountsActions } from 'client/components/tables/TableRationLoadingCounts';
export const SCHEDULES_PAGE_GET = 'SchedulesPage/SCHEDULES_PAGE_GET';
export const SCHEDULES_PAGE_SET = 'SchedulesPage/SCHEDULES_PAGE_SET';
export const SCHEDULES_PAGE_GOTO = 'SchedulesPage/SCHEDULES_PAGE_GOTO';
export const SCHEDULES_PAGE_CALL_SHOW_REMOVE_DIALOG = 'SchedulesPage/SCHEDULES_PAGE_CALL_SHOW_REMOVE_DIALOG';
export const SCHEDULES_PAGE_CALL_SHOW_ADD_DIALOG = 'SchedulesPage/SCHEDULES_PAGE_CALL_SHOW_ADD_DIALOG';

function getSchedules(farmId, planned = '') {
  return { type : SCHEDULES_PAGE_GET, payload : { farmId, planned } };
}

function getLoadings(farmId) {
  return loadingCountsActions.getLoadingCounts(farmId);
}

function setSchedules(schedules) {
  return { type :SCHEDULES_PAGE_SET, payload : { schedules } };
}

function goTo(farmId, scheduleId) {
  return { type : SCHEDULES_PAGE_GOTO, payload : { farmId, scheduleId } };
}

function showSchedulesRemoveDialog(schedules) {
  return { type : SCHEDULES_PAGE_CALL_SHOW_REMOVE_DIALOG, payload : { schedules } };
}

function showSchedulesAddDialog() {
  return { type : SCHEDULES_PAGE_CALL_SHOW_ADD_DIALOG };
}

function containerActions(dispatch) {
  return bindActionCreators({
    getSchedules,
    setSchedules,
    goTo,
    showSchedulesRemoveDialog,
    showSchedulesAddDialog,
    getLoadings
  }, dispatch);
}

export {
  containerActions,
  getSchedules,
  setSchedules,
  goTo,
  showSchedulesRemoveDialog,
  showSchedulesAddDialog,
  getLoadings
};
