/*
* Rationingredients Reducer
*
* This contains all the text for the Rationingredients component.
*/
import * as actions from './actions.js';

const initialState = {
  open : false,
  locked : false,
  error : false,
  errorMessage : ''
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.DIALOG_RATIONINGREDIENTS_CLOSE) {
    return Object.assign({}, state, initialState);
  }


  if (type === actions.DIALOG_RATIONINGREDIENTS_OPEN) {
    return Object.assign({}, state, {
      open : true
    });
  }

  if (type === actions.DIALOG_RATIONINGREDIENTS_SUBMIT) {
    return Object.assign({}, state, {
      locked : false,
      open : false
    });
  }

  if (type === actions.DIALOG_RATIONINGREDIENTS_SUBMIT_ERROR) {
    return Object.assign({}, state, {
      locked : false,
      error : true,
      errorMessage : payload.errorMessage
    });
  }

  if (type === actions.DIALOG_RATIONINGREDIENTS_SUBMIT_SUCCESS) {
    return Object.assign({}, state, {
      locked : false,
      open : false
    });
  }

  return state;
}
