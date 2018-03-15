/*
* MixersPage Actions
*
* This contains all the text for the MixersPage component.
*/
import { bindActionCreators } from 'redux';
export const MIXERS_PAGE_GET = 'MixersPage/MIXERS_PAGE_GET';
export const MIXERS_PAGE_SET = 'MixersPage/MIXERS_PAGE_SET';
export const MIXERS_PAGE_CALL_SHOW_ADD_DIALOG = 'MixersPage/MIXERS_PAGE_CALL_SHOW_ADD_DIALOG';
export const MIXERS_PAGE_CALL_SHOW_EDIT_DIALOG = 'MixersPage/MIXERS_PAGE_CALL_SHOW_EDIT_DIALOG';
export const MIXERS_PAGE_CALL_SHOW_REMOVE_DIALOG = 'MixersPage/MIXERS_PAGE_CALL_SHOW_REMOVE_DIALOG';
export const MIXERS_PAGE_GET_FARMS = 'MixersPage/MIXERS_PAGE_GET_FARMS';
export const MIXERS_PAGE_SET_FARMS = 'MixersPage/MIXERS_PAGE_SET_FARMS';

function getMixers() {
  return { type : MIXERS_PAGE_GET };
}

function setMixers(mixers) {
  return { type : MIXERS_PAGE_SET, payload : { mixers } };
}

function showMixersAddDialog() {
  return { type : MIXERS_PAGE_CALL_SHOW_ADD_DIALOG };
}

function showMixersEditDialog(mixer) {
  return { type : MIXERS_PAGE_CALL_SHOW_EDIT_DIALOG, payload : { mixer } };
}
/**
 *
 * @return {{type: string}}
 */
function getFarms() {
  return { type : MIXERS_PAGE_GET_FARMS };
}
/**
 *
 * @param farms
 * @return {{type: string, payload: {farms: *}}}
 */
function setFarms(farms) {
  return { type : MIXERS_PAGE_SET_FARMS, payload : { farms } };
}

function showMixersRemoveDialog(mixer) {
  return { type : MIXERS_PAGE_CALL_SHOW_REMOVE_DIALOG, payload : { mixer } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getMixers, setMixers, showMixersAddDialog, showMixersEditDialog, showMixersRemoveDialog,
    getFarms, setFarms }, dispatch);
}

export { containerActions, getMixers, setMixers, showMixersAddDialog, showMixersEditDialog, showMixersRemoveDialog,
  getFarms, setFarms };
