/*
* TableRationLoadingCounts Actions
*
* This contains all the text for the TableRationLoadingCounts component.
*/
import { bindActionCreators } from 'redux';

export const TABLE_RATION_LOADINGCOUNT_GET_LOADINGCOUNTS =
  'TableRationLoadingCounts/TABLE_RATION_LOADINGCOUNT_GET_LOADINGCOUNTS';
export const TABLE_RATION_LOADINGCOUNT_SET_LOADINGCOUNTS =
  'TableRationLoadingCounts/TABLE_RATION_LOADINGCOUNT_SET_LOADINGCOUNTS';
export const TABLE_RATION_LOADINGCOUNT_GET_MIXERS = 'TableRationLoadingCounts/TABLE_RATION_LOADINGCOUNT_GET_MIXERS';
export const TABLE_RATION_LOADINGCOUNT_SET_MIXERS = 'TableRationLoadingCounts/TABLE_RATION_LOADINGCOUNT_SET_MIXERS';
export const TABLE_RATION_LOADINGCOUNT_SHOW_ADD_DIALOG =
  'TableRationLoadingCounts/TABLE_RATION_LOADINGCOUNT_SHOW_ADD_DIALOG';
export const TABLE_RATION_LOADINGCOUNT_SHOW_EDIT_DIALOG =
  'TableRationLoadingCounts/TABLE_RATION_LOADINGCOUNT_SHOW_EDIT_DIALOG';
export const TABLE_RATION_LOADINGCOUNT_SHOW_REMOVE_DIALOG =
  'TableRationLoadingCounts/TABLE_RATION_LOADINGCOUNT_SHOW_REMOVE_DIALOG';
export const TABLE_RATION_LOADINGCOUNT_PROPERTY_EDITED =
  'TableRationLoadingCounts/TABLE_RATION_LOADINGCOUNT_PROPERTY_EDITED';

function getLoadingCounts(farmId) {
  return { type : TABLE_RATION_LOADINGCOUNT_GET_LOADINGCOUNTS, payload : { farmId } };
}

function setLoadingCounts(loadingCounts) {
  return { type : TABLE_RATION_LOADINGCOUNT_SET_LOADINGCOUNTS, payload : { loadingCounts } };
}

function getMixers(farmId) {
  return { type : TABLE_RATION_LOADINGCOUNT_GET_MIXERS, payload : { farmId } };
}

function setMixers(mixers) {
  return { type : TABLE_RATION_LOADINGCOUNT_SET_MIXERS, payload : { mixers } };
}

function showTableRationLoadingCountsAddDialog() {
  return { type : TABLE_RATION_LOADINGCOUNT_SHOW_ADD_DIALOG };
}

function showTableRationLoadingCountsEditDialog(loadingCount) {
  return { type : TABLE_RATION_LOADINGCOUNT_SHOW_EDIT_DIALOG, payload : { loadingCount } };
}

function showTableRationLoadingCountsRemoveDialog(loadingCount) {
  return { type : TABLE_RATION_LOADINGCOUNT_SHOW_REMOVE_DIALOG, payload : { loadingCount } };
}

function saveEditedProperty(targetId, propertyName, value) {
  return { type : TABLE_RATION_LOADINGCOUNT_PROPERTY_EDITED, payload : { targetId, propertyName, value } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getLoadingCounts, setLoadingCounts, getMixers, setMixers, showTableRationLoadingCountsAddDialog,
    showTableRationLoadingCountsEditDialog, showTableRationLoadingCountsRemoveDialog, saveEditedProperty }, dispatch);
}

export { containerActions, getLoadingCounts, setLoadingCounts, getMixers, setMixers, showTableRationLoadingCountsAddDialog,
  showTableRationLoadingCountsEditDialog, showTableRationLoadingCountsRemoveDialog, saveEditedProperty };
