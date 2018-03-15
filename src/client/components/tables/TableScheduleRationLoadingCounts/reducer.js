/*
* TableRationLoadingCounts Reducer
*
* This contains all the text for the TableRationLoadingCounts component.
*/
import * as actions from './actions';

const initialState = {
  mixers : []
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  if (type === actions.TABLE_SCHEDULE_RATION_LOADINGCOUNT_SET_MIXERS) {
    return { ...state, mixers : [ ...payload.mixers ] };
  }
  return state;
}
