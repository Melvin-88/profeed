/*
* TableRationGroups Actions
*
* This contains all the text for the TableRationGroups component.
*/
import { bindActionCreators } from 'redux';
const prefixConst = 'TableScheduleRationGroups';

export const TABLE_SCHEDULE_GROUPS_GET_GROUPS = `${prefixConst}/TABLE_SCHEDULE_GROUPS_GET_GROUPS`;
export const TABLE_SCHEDULE_GROUPS_SET_GROUPS = `${prefixConst}/TABLE_SCHEDULE_GROUPS_SET_GROUPS`;
export const TABLE_SCHEDULE_GROUPS_PROPERTY_EDITED = `${prefixConst}/TABLE_SCHEDULE_GROUPS_PROPERTY_EDITED`;

function getGroups(farmId) {
  return { type : TABLE_SCHEDULE_GROUPS_GET_GROUPS, payload : { farmId } };
}

function setGroups(groups) {
  return { type : TABLE_SCHEDULE_GROUPS_SET_GROUPS, payload : { groups } };
}

function saveEditedProperty(targetId, propertyName, value) {
  return { type : TABLE_SCHEDULE_GROUPS_PROPERTY_EDITED, payload : { targetId, propertyName, value } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getGroups, setGroups, saveEditedProperty }, dispatch);
}

export { getGroups, setGroups, saveEditedProperty, containerActions };

