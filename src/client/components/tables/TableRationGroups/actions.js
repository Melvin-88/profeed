/*
* TableRationGroups Actions
*
* This contains all the text for the TableRationGroups component.
*/
import { bindActionCreators } from 'redux';
const prefixConst = 'TableRationGroups';

export const TABLE_RATION_GROUPS_GET_GROUPS = `${prefixConst}/TABLE_RATION_GROUPS_GET_GROUPS`;
export const TABLE_RATION_GROUPS_SET_GROUPS = `${prefixConst}/TABLE_RATION_GROUPS_SET_GROUPS`;
export const TABLE_RATION_GROUPS_SHOW_ADD_DIALOG = `${prefixConst}/TABLE_RATION_GROUPS_SHOW_ADD_DIALOG`;
export const TABLE_RATION_GROUPS_SHOW_EDIT_DIALOG = `${prefixConst}/TABLE_RATION_GROUPS_SHOW_EDIT_DIALOG`;
export const TABLE_RATION_GROUPS_SHOW_REMOVE_DIALOG = `${prefixConst}/TABLE_RATION_GROUPS_SHOW_REMOVE_DIALOG`;
export const TABLE_RATION_GROUPS_PROPERTY_EDITED = `${prefixConst}/TABLE_RATION_GROUPS_PROPERTY_EDITED`;

function getGroups(farmId) {
  return { type : TABLE_RATION_GROUPS_GET_GROUPS, payload : { farmId } };
}

function setGroups(groups) {
  return { type : TABLE_RATION_GROUPS_SET_GROUPS, payload : { groups } };
}

function showTableRationGroupsAddDialog() {
  return { type : TABLE_RATION_GROUPS_SHOW_ADD_DIALOG };
}

function showTableRationGroupsEditDialog(group) {
  return { type : TABLE_RATION_GROUPS_SHOW_EDIT_DIALOG, payload : { group } };
}

function showTableRationGroupsRemoveDialog(group) {
  return { type : TABLE_RATION_GROUPS_SHOW_REMOVE_DIALOG, payload : { group } };
}

function saveEditedProperty(targetId, propertyName, value) {
  return { type : TABLE_RATION_GROUPS_PROPERTY_EDITED, payload : { targetId, propertyName, value } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getGroups, setGroups, showTableRationGroupsAddDialog,
    showTableRationGroupsEditDialog, showTableRationGroupsRemoveDialog, saveEditedProperty }, dispatch);
}

export { getGroups, setGroups, showTableRationGroupsAddDialog, showTableRationGroupsEditDialog,
  showTableRationGroupsRemoveDialog, saveEditedProperty, containerActions };

