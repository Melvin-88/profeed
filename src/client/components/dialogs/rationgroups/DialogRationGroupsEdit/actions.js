/*
* Rationgroups Actions
*
* This contains all the text for the Rationgroups component.
*/
import { bindActionCreators } from 'redux';
const prefixConst = 'DialogRationGroupsEdit';

export const DIALOG_RATIONGROUPS_OPEN = `${prefixConst}/DIALOG_RATIONGROUPS_OPEN`;
export const DIALOG_RATIONGROUPS_CLOSE = `${prefixConst}/DIALOG_RATIONGROUPS_CLOSE`;
export const DIALOG_RATIONGROUPS_SUBMIT = `${prefixConst}/DIALOG_RATIONGROUPS_SUBMIT`;
export const DIALOG_RATIONGROUPS_SUBMIT_SUCCESS = `${prefixConst}/DIALOG_RATIONGROUPS_SUBMIT_SUCCESS`;
export const DIALOG_RATIONGROUPS_SUBMIT_ERROR = `${prefixConst}/DIALOG_RATIONGROUPS_SUBMIT_ERROR`;

function openDialog(group) {
  return { type : DIALOG_RATIONGROUPS_OPEN, payload : { group } };
}

function closeDialog() {
  return { type : DIALOG_RATIONGROUPS_CLOSE };
}

function submitData(group) {
  return { type : DIALOG_RATIONGROUPS_SUBMIT, payload : { group } };
}

function responseSuccess() {
  return { type : DIALOG_RATIONGROUPS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_RATIONGROUPS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitData, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitData, responseError, responseSuccess };
