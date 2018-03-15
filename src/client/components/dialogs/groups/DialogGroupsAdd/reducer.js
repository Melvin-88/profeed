/*
* DialogGroupsAdd Reducer
*
* This contains all the text for the DialogGroupsAdd component.
*/
// import * as actions from './actions.js';

import * as actions from './actions.js';

const initialState = {
  open : false,
  locked : false,
  error : false,
  errorMessage : ''
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.DIALOG_GROUPS_CLOSE) {
    return Object.assign({}, state, initialState);
  }


  if (type === actions.DIALOG_GROUPS_OPEN) {
    // console.log('DialogGroupsAdd | reducer | DIALOG_GROUPS_OPEN payload ', payload);
    return Object.assign({}, state, {
      open : true
    });
  }

  if (type === actions.DIALOG_GROUPS_SUBMIT) {
    return Object.assign({}, state, {
      locked : true
    });
  }

  if (type === actions.DIALOG_GROUPS_SUBMIT_ERROR) {
    return Object.assign({}, state, {
      locked : false,
      error : true,
      errorMessage : payload.errorMesssage
    });
  }

  if (type === actions.DIALOG_GROUPS_SUBMIT_SUCCESS) {
    return Object.assign({}, state, {
      locked : false,
      open : false
    });
  }

  return state;
}

