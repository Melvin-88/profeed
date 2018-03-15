/*
* RationsPage Reducer
*
* This contains all the text for the RationsPage component.
*/
import * as actions from './actions.js';

const initialState = {
  rations : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.RATIONS_PAGE_SET) {
    return { ...state, rations : payload.rations };
  }

  return state;
}
