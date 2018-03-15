/*
* UserGroups Reducer
*
* This contains all the text for the UserGroups component.
*/
import * as actions from './actions.js';

const initialState = {
  open : false,
  locked : false,
  error : false,
  errorMessage : '',
  usergroup : null
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.DIALOG_USER_GROUPS_CLOSE) {
    return Object.assign({}, state, initialState);
  }


  if (type === actions.DIALOG_USER_GROUPS_OPEN) {
    return Object.assign({}, state, {
      open : true,
      usergroup : payload.usergroup
    });
  }

  if (type === actions.DIALOG_USER_GROUPS_SUBMIT) {
    return Object.assign({}, state, {
      locked : true
    });
  }

  if (type === actions.DIALOG_USER_GROUPS_SUBMIT_ERROR) {
    return Object.assign({}, state, {
      locked : false,
      error : true,
      errorMessage : payload.errorMessage
    });
  }

  if (type === actions.DIALOG_USER_GROUPS_SUBMIT_SUCCESS) {
    return Object.assign({}, state, {
      locked : false,
      open : false
    });
  }

  return state;
}
