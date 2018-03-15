/*
* TableRationLoadingCounts Reducer
*
* This contains all the text for the TableRationLoadingCounts component.
*/
import * as actions from './actions.js';

const initialState = {
  loadingCounts : [],
  mixers : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (actions.TABLE_RATION_LOADINGCOUNT_SET_LOADINGCOUNTS === type) {
    return { ...state, loadingCounts : payload.loadingCounts };
  }

  if (actions.TABLE_RATION_LOADINGCOUNT_SET_MIXERS === type) {
    return { ...state, mixers : payload.mixers };
  }

  return state;
}
