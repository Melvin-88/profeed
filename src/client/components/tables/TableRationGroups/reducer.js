/*
* TableRationGroups Reducer
*
* This contains all the text for the TableRationGroups component.
*/

import * as actions from './actions.js';

const initialState = {
  groups : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (actions.TABLE_RATION_GROUPS_SET_GROUPS === type) {
    return { ...state, groups : payload.groups };
  }

  return state;
}
