/*
* RationPage Actions
*
* This contains all the text for the RationPage component.
*/
import { bindActionCreators } from 'redux';
export const RATION_PAGE_GET = 'RationPage/RATION_PAGE_GET';
export const RATION_PAGE_SET = 'RationPage/RATION_PAGE_SET';
export const RATION_PAGE_CALL_SHOW_ADD_DIALOG = 'RationPage/RATION_PAGE_CALL_SHOW_ADD_DIALOG';
export const RATION_PAGE_CALL_SHOW_EDIT_DIALOG = 'RationPage/RATION_PAGE_CALL_SHOW_EDIT_DIALOG';
export const RATION_PAGE_COEFFICIENT_CHANGE = 'RationPage/RATION_PAGE_COEFFICIENT_CHANGE';
export const RATION_PAGE_SAVE_RATION = 'RationPage/RATION_PAGE_SAVE_RATION';
export const RATION_PAGE_EXIT = 'RationPage/RATION_PAGE_EXIT';
export const RATION_PAGE_RESET = 'RationPage/RATION_PAGE_RESET';

function getRation(rationId) {
  return { type : RATION_PAGE_GET, payload : { rationId } };
}

function setRation(ration) {
  return { type :RATION_PAGE_SET, payload : { ration } };
}

function showRationAddDialog() {
  return { type : RATION_PAGE_CALL_SHOW_ADD_DIALOG };
}

function showRationEditDialog(ration) {
  return { type : RATION_PAGE_CALL_SHOW_EDIT_DIALOG, payload : { ration } };
}

function changeCoefficient(coefficient) {
  return { type : RATION_PAGE_COEFFICIENT_CHANGE, payload : { coefficient } };
}

function saveRation(ration, type) {
  return { type : RATION_PAGE_SAVE_RATION, payload : { ration, type } };
}

function resetRation() {
  return { type : RATION_PAGE_RESET };
}

function exit(farm) {
  return { type : RATION_PAGE_EXIT, payload : { farm } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getRation, setRation, showRationAddDialog, changeCoefficient, showRationEditDialog,
    saveRation, exit, resetRation }, dispatch);
}

export { containerActions, getRation, setRation, showRationAddDialog, changeCoefficient, showRationEditDialog,
  saveRation, exit, resetRation
};
