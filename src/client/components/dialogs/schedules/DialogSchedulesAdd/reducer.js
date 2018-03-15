/*
* Schedules Reducer
*
* This contains all the text for the Schedules component.
*/
import * as actions from './actions.js';

const initialState = {
  open : false,
  locked : false,
  error : false,
  errorMessage : '',
  rations : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.DIALOG_SCHEDULES_CLOSE) {
    return Object.assign({}, state, {
      open : false,
      locked : false,
      error : false,
      errorMessage : ''
    });
  }


  if (type === actions.DIALOG_SCHEDULES_OPEN) {
    return Object.assign({}, state, {
      open : true
    });
  }

  if (type === actions.DIALOG_SCHEDULES_SUBMIT) {
    return Object.assign({}, state, {
      locked : true
    });
  }

  if (type === actions.DIALOG_SCHEDULES_SUBMIT_ERROR) {
    return Object.assign({}, state, {
      locked : false,
      error : true,
      errorMessage : payload.errorMessage
    });
  }

  if (type === actions.DIALOG_SCHEDULES_SUBMIT_SUCCESS) {
    return Object.assign({}, state, {
      locked : false,
      open : false
    });
  }

  if (type === actions.DIALOG_SCHEDULES_SET_RATIONS) {
    return Object.assign({}, state, { rations : [ ...payload.rations ] });
  }

  return state;
}
