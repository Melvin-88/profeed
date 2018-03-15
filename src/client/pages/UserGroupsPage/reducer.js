/*
* UserGroupsPage Reducer
*
* This contains all the text for the UserGroupsPage component.
*/
import * as actions from './actions.js';

const initialState = {
  usergroups : [],
  settings : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.USER_GROUPS_PAGE_SET) {
    return { ...state, usergroups : payload.usergroups };
  }

  if (type === actions.USER_GROUPS_PAGE_SET_GROUPS_SETTINGS) {
    return { ...state, settings : payload.settings };
  }

  return state;
}
