/*
* TableRationLoadingCounts Actions
*
* This contains all the text for the TableRationLoadingCounts component.
*/
import { bindActionCreators } from 'redux';

const prefix = 'TableScheduleRationLoadingCounts';

export const TABLE_SCHEDULE_RATION_LOADINGCOUNT_GET_MIXERS = `${prefix}/TABLE_SCHEDULE_RATION_LOADINGCOUNT_GET_MIXERS`;
export const TABLE_SCHEDULE_RATION_LOADINGCOUNT_SET_MIXERS = `${prefix}/TABLE_SCHEDULE_RATION_LOADINGCOUNT_SET_MIXERS`;
export const TABLE_SCHEDULE_RATION_LOADINGCOUNT_PROPERTY_EDITED =
  `${prefix}/TABLE_SCHEDULE_RATION_LOADINGCOUNT_PROPERTY_EDITED`;
/**
 *
 * @param farmId
 * @return {{type: string, payload: {farmId: *}}}
 */
function getMixers(farmId) {
  return { type : TABLE_SCHEDULE_RATION_LOADINGCOUNT_GET_MIXERS, payload : { farmId } };
}
/**
 *
 * @param mixers
 * @return {{type: string, payload: {mixers: *}}}
 */
function setMixers(mixers) {
  return { type : TABLE_SCHEDULE_RATION_LOADINGCOUNT_SET_MIXERS, payload : { mixers } };
}
/**
 *
 * @param targetId
 * @param propertyName
 * @param value
 * @return {{type: string, payload: {targetId: *, propertyName: *, value: *}}}
 */
function saveEditedProperty(targetId, propertyName, value) {
  return { type : TABLE_SCHEDULE_RATION_LOADINGCOUNT_PROPERTY_EDITED, payload : { targetId, propertyName, value } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getMixers, setMixers, saveEditedProperty }, dispatch);
}

export { containerActions, getMixers, setMixers, saveEditedProperty };
