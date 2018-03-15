/*
* ReportsPage Actions
*
* This contains all the text for the ReportsPage component.
*/
import { bindActionCreators } from 'redux';
export const REPORTS_PAGE_GET = 'ReportsPage/REPORTS_PAGE_GET';
export const REPORTS_PAGE_SET = 'ReportsPage/REPORTS_PAGE_SET';
export const REPORTS_PAGE_CALL_SHOW_ADD_DIALOG = 'ReportsPage/REPORTS_PAGE_CALL_SHOW_ADD_DIALOG';
export const REPORTS_PAGE_CALL_SHOW_EDIT_DIALOG = 'ReportsPage/REPORTS_PAGE_CALL_SHOW_EDIT_DIALOG';
export const REPORTS_PAGE_CALL_SHOW_REMOVE_DIALOG = 'ReportsPage/REPORTS_PAGE_CALL_SHOW_REMOVE_DIALOG';
export const REPORTS_PAGE_MAIN_REPORT_SET = 'ReportsPage/REPORTS_PAGE_MAIN_REPORT_SET';
export const REPORTS_PAGE_MAIN_REPORT_GET = 'ReportsPage/REPORTS_PAGE_MAIN_REPORT_GET';

function getUserReports(farmId) {
  return { type : REPORTS_PAGE_GET, payload : { farmId } };
}

function setUserReports(userReports) {
  return { type : REPORTS_PAGE_SET, payload : { userReports } };
}

function getMainReports() {
  return { type : REPORTS_PAGE_MAIN_REPORT_GET };
}

function setMainReports(reports) {
  return { type : REPORTS_PAGE_MAIN_REPORT_SET, payload : { reports } };
}

function showReportsAddDialog() {
  return { type : REPORTS_PAGE_CALL_SHOW_ADD_DIALOG };
}

function showReportsEditDialog(report) {
  return { type : REPORTS_PAGE_CALL_SHOW_EDIT_DIALOG, payload : { report } };
}

function showReportsRemoveDialog(report) {
  return { type : REPORTS_PAGE_CALL_SHOW_REMOVE_DIALOG, payload : { report } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getUserReports, setUserReports, showReportsAddDialog,
    showReportsEditDialog, showReportsRemoveDialog, getMainReports, setMainReports }, dispatch);
}

export { containerActions, getUserReports, setUserReports, showReportsAddDialog,
    showReportsEditDialog, showReportsRemoveDialog, getMainReports, setMainReports };
