/*
* Reports Actions
*
* This contains all the text for the Reports component.
*/
import { bindActionCreators } from 'redux';
import { actions as actionsUserGroups } from 'client/pages/UserGroupsPage';
export const DIALOG_REPORTS_OPEN = 'DialogReportsEdit/DIALOG_REPORTS_OPEN';
export const DIALOG_REPORTS_CLOSE = 'DialogReportsEdit/DIALOG_REPORTS_CLOSE';
export const DIALOG_REPORTS_SUBMIT = 'DialogReportsEdit/DIALOG_REPORTS_SUBMIT';
export const DIALOG_REPORTS_SUBMIT_SUCCESS = 'DialogReportsEdit/DIALOG_REPORTS_SUBMIT_SUCCESS';
export const DIALOG_REPORTS_SUBMIT_ERROR = 'DialogReportsEdit/DIALOG_REPORTS_SUBMIT_ERROR';


function openDialog(report) {
  return { type : DIALOG_REPORTS_OPEN, payload: { report } };
}

function closeDialog() {
  return { type : DIALOG_REPORTS_CLOSE };
}

function submitEditReports() {
  return { type : DIALOG_REPORTS_SUBMIT };
}

function responseSuccess() {
  return { type : DIALOG_REPORTS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_REPORTS_SUBMIT_ERROR, payload : { errorMessage } };
}


function getUserGroups() {
  return actionsUserGroups.getUserGroups();
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitEditReports, responseError, responseSuccess,
    getUserGroups }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitEditReports, responseError, responseSuccess };
