/*
* GroupPage Reducer
*
* This contains all the text for the GroupPage component.
*/
import * as actions from './actions.js';

const initialState = {
  groups : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.GROUPS_SET) {
    return { ...state, groups : payload.groups };
  }

  return state;
}
