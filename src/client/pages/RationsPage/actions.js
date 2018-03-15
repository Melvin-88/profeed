/*
* RationsPage Actions
*
* This contains all the text for the RationsPage component.
*/
import { bindActionCreators } from 'redux';
export const RATIONS_PAGE_GET = 'RationsPage/RATIONS_PAGE_GET';
export const RATIONS_PAGE_SET = 'RationsPage/RATIONS_PAGE_SET';
export const RATIONS_PAGE_CALL_SHOW_ADD_DIALOG = 'RationsPage/RATIONS_PAGE_CALL_SHOW_ADD_DIALOG';
export const RATIONS_PAGE_CALL_SHOW_EDIT_DIALOG = 'RationsPage/RATIONS_PAGE_CALL_SHOW_EDIT_DIALOG';
export const RATIONS_PAGE_CALL_SHOW_REMOVE_DIALOG = 'RationsPage/RATIONS_PAGE_CALL_SHOW_REMOVE_DIALOG';
export const RATIONS_PAGE_GOTO = 'RationsPage/RATIONS_PAGE_GOTO';

function getRations(farmId) {
  return { type : RATIONS_PAGE_GET, payload : { farmId } };
}

function setRations(rations) {
  return { type :RATIONS_PAGE_SET, payload : { rations } };
}

function showRationsAddPage() {
  return { type : RATIONS_PAGE_CALL_SHOW_ADD_DIALOG };
}

function showRationsEditPage(rations) {
  return { type : RATIONS_PAGE_CALL_SHOW_EDIT_DIALOG, payload : { rations } };
}

function showRationsRemoveDialog(ration) {
  return { type : RATIONS_PAGE_CALL_SHOW_REMOVE_DIALOG, payload : { ration } };
}

function goTo(type, farmId, rationId) {
  return { type : RATIONS_PAGE_GOTO, payload : { type, farmId, rationId } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getRations, setRations, showRationsAddPage, goTo, showRationsEditPage,
    showRationsRemoveDialog }, dispatch);
}

export { containerActions, getRations, setRations, showRationsAddPage, goTo, showRationsEditPage,
  showRationsRemoveDialog
};
