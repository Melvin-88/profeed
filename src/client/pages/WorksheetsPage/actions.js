/*
* WorksheetsPage Actions
*
* This contains all the text for the WorksheetsPage component.
*/
import { bindActionCreators } from 'redux';
export const WORKSHEETS_PAGE_GET = 'WorksheetsPage/WORKSHEETS_PAGE_GET';
export const WORKSHEETS_PAGE_SET = 'WorksheetsPage/WORKSHEETS_PAGE_SET';
export const WORKSHEETS_PAGE_CALL_SHOW_ADD_DIALOG = 'WorksheetsPage/WORKSHEETS_PAGE_CALL_SHOW_ADD_DIALOG';
export const WORKSHEETS_PAGE_CALL_SHOW_EDIT_DIALOG = 'WorksheetsPage/WORKSHEETS_PAGE_CALL_SHOW_EDIT_DIALOG';
export const WORKSHEETS_PAGE_CALL_SHOW_REMOVE_DIALOG = 'WorksheetsPage/WORKSHEETS_PAGE_CALL_SHOW_REMOVE_DIALOG';

function getWorksheets(farmId) {
  return { type : WORKSHEETS_PAGE_GET, payload : { farmId } };
}

function setWorksheets(worksheets) {
  return { type :WORKSHEETS_PAGE_SET, payload : { worksheets } };
}

function showWorksheetsAddDialog() {
  return { type : WORKSHEETS_PAGE_CALL_SHOW_ADD_DIALOG };
}

function showWorksheetsEditDialog(worksheets) {
  return { type : WORKSHEETS_PAGE_CALL_SHOW_EDIT_DIALOG, payload : { worksheets } };
}

function showWorksheetsRemoveDialog(worksheets) {
  return { type : WORKSHEETS_PAGE_CALL_SHOW_REMOVE_DIALOG, payload : { worksheets } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getWorksheets, setWorksheets, showWorksheetsAddDialog,
    showWorksheetsEditDialog, showWorksheetsRemoveDialog }, dispatch);
}

export { containerActions, getWorksheets, setWorksheets, showWorksheetsAddDialog,
    showWorksheetsEditDialog, showWorksheetsRemoveDialog };
