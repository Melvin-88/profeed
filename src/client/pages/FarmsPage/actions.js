/*
* FarmsPage Actions
*
* This contains all the text for the FarmsPage component.
*/
import { bindActionCreators } from 'redux';

export const FARMS_GET = 'FarmsPage/FARMS_GET';
export const FARMS_SET = 'FarmsPage/SET_FARMS';
export const FARMS_CALL_SHOW_ADD_DIALOG = 'FarmsPage/FARMS_CALL_SHOW_ADD_DIALOG';
export const FARMS_CALL_SHOW_EDIT_DIALOG = 'FarmsPage/FARMS_CALL_SHOW_EDIT_DIALOG';
export const FARMS_CALL_SHOW_REMOVE_DIALOG = 'FarmsPage/FARMS_CALL_SHOW_REMOVE_DIALOG';
export const FARMS_GO_TO_FARM = 'FarmsPage/FARMS_GO_TO_FARM';

function getFarms(page = 0) {
  return { type : FARMS_GET, payload : { page } };
}

function setFarms(farms) {
  return { type : FARMS_SET, payload : { farms } };
}

function showFarmsAddDialog() {
  return { type : FARMS_CALL_SHOW_ADD_DIALOG };
}

function showFarmsEditDialog(farm) {
  return { type : FARMS_CALL_SHOW_EDIT_DIALOG, payload : { farm } };
}

function showFarmsRemoveDialog(farm) {
  return { type : FARMS_CALL_SHOW_REMOVE_DIALOG, payload : { farm } };
}

function goToFarm(farm, urlTemplate) {
  return { type : FARMS_GO_TO_FARM, payload : { farm, urlTemplate } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getFarms, setFarms, showFarmsAddDialog, showFarmsRemoveDialog, showFarmsEditDialog,
    goToFarm },
    dispatch);
}

export { containerActions, setFarms, showFarmsAddDialog, getFarms, showFarmsRemoveDialog, showFarmsEditDialog, goToFarm };
