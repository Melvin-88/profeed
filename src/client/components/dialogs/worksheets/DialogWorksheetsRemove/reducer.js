/*
* Worksheets Reducer
*
* This contains all the text for the Worksheets component.
*/
import * as actions from './actions.js';

const initialState = {
  open : false,
  locked : false,
  error : false,
  errorMessage : '',
  worksheet : null
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.DIALOG_WORKSHEETS_CLOSE) {
    return Object.assign({}, state, initialState);
  }


  if (type === actions.DIALOG_WORKSHEETS_OPEN) {
    return Object.assign({}, state, {
      open : true,
      worksheet : payload.worksheet
    });
  }

  if (type === actions.DIALOG_WORKSHEETS_SUBMIT) {
    return Object.assign({}, state, {
      locked : true
    });
  }

  if (type === actions.DIALOG_WORKSHEETS_SUBMIT_ERROR) {
    return Object.assign({}, state, {
      locked : false,
      error : true,
      errorMessage : payload.errorMessage
    });
  }

  if (type === actions.DIALOG_WORKSHEETS_SUBMIT_SUCCESS) {
    return Object.assign({}, state, {
      locked : false,
      open : false
    });
  }

  return state;
}
