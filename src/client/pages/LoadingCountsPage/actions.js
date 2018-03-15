/*
* LoadingCountsPage Actions
*
* This contains all the text for the LoadingCountsPage component.
*/
import { bindActionCreators } from 'redux';
export const LOADING_COUNTS_PAGE_GET = 'LoadingCountsPage/LOADING_COUNTS_PAGE_GET';
export const LOADING_COUNTS_PAGE_SET = 'LoadingCountsPage/LOADING_COUNTS_PAGE_SET';
export const LOADING_COUNTS_PAGE_CALL_SHOW_ADD_DIALOG = 'LoadingCountsPage/LOADING_COUNTS_PAGE_CALL_SHOW_ADD_DIALOG';
export const LOADING_COUNTS_PAGE_CALL_SHOW_EDIT_DIALOG = 'LoadingCountsPage/LOADING_COUNTS_PAGE_CALL_SHOW_EDIT_DIALOG';
export const LOADING_COUNTS_PAGE_CALL_SHOW_REMOVE_DIALOG = 'LoadingCountsPage/LOADING_COUNTS_PAGE_CALL_SHOW_REMOVE_DIALOG';

function getLoadingCounts(farmId) {
  return { type : LOADING_COUNTS_PAGE_GET, payload : { farmId } };
}

function setLoadingCounts(loadingcounts) {
  return { type :LOADING_COUNTS_PAGE_SET, payload : { loadingcounts } };
}

function showLoadingCountsAddDialog() {
  return { type : LOADING_COUNTS_PAGE_CALL_SHOW_ADD_DIALOG };
}

function showLoadingCountsEditDialog(loadingcounts) {
  return { type : LOADING_COUNTS_PAGE_CALL_SHOW_EDIT_DIALOG, payload : { loadingcounts } };
}

function showLoadingCountsRemoveDialog(loadingcounts) {
  return { type : LOADING_COUNTS_PAGE_CALL_SHOW_REMOVE_DIALOG, payload : { loadingcounts } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getLoadingCounts, setLoadingCounts, showLoadingCountsAddDialog,
    showLoadingCountsEditDialog, showLoadingCountsRemoveDialog }, dispatch);
}

export { containerActions, getLoadingCounts, setLoadingCounts, showLoadingCountsAddDialog,
    showLoadingCountsEditDialog, showLoadingCountsRemoveDialog };
