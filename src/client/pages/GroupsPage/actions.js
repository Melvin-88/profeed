/*
* GroupPage Actions
*
* This contains all the text for the GroupPage component.
*/
import { bindActionCreators } from 'redux';

export const GROUPS_GET = 'GroupsPage/GROUPS_GET';
export const GROUPS_SET = 'GroupsPage/GROUPS_SET';
export const GROUPS_CALL_SHOW_ADD_DIALOG = 'GroupsPage/GROUPS_CALL_SHOW_ADD_DIALOG';
export const GROUPS_CALL_SHOW_EDIT_DIALOG = 'GroupsPage/GROUPS_CALL_SHOW_EDIT_DIALOG';
export const GROUPS_CALL_SHOW_REMOVE_DIALOG = 'GroupsPage/GROUPS_CALL_SHOW_REMOVE_DIALOG';

function getGroups(farmId) {
  return { type : GROUPS_GET, payload : { farmId } };
}

function setGroups(groups) {
  return { type : GROUPS_SET, payload : { groups } };
}

function showGroupAddDialog() {
  return { type : GROUPS_CALL_SHOW_ADD_DIALOG };
}

function showGroupEditDialog(group) {
  return { type : GROUPS_CALL_SHOW_EDIT_DIALOG, payload : { group } };
}

function showGroupRemoveDialog(groups) {
  return { type : GROUPS_CALL_SHOW_REMOVE_DIALOG, payload : { groups } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getGroups, setGroups, showGroupAddDialog, showGroupEditDialog, showGroupRemoveDialog },
    dispatch);
}

export { containerActions, getGroups, setGroups, showGroupAddDialog, showGroupEditDialog, showGroupRemoveDialog };
