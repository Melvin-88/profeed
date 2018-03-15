/*
* RegisterPage Reducer
*
* This contains all the text for the RegisterPage component.
*/
import * as actions from './actions.js';

const initialState = {
  locked : false,
  errorMessage : ''
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.REGISTER_START) {
    return Object.assign({}, state, {
      locked : true,
      errorMessage : ''
    });
  }

  if (type === actions.REGISTER_SUCCESS) {
    return Object.assign({}, state, {
      locked : false,
      errorMessage : ''
    });
  }

  if (type === actions.REGISTER_ERROR) {
    return Object.assign({}, state, {
      locked : false,
      errorMessage : payload.errorMessage
    });
  }

  return state;
}
