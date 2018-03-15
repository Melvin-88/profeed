/*
* Animalfeeds Reducer
*
* This contains all the text for the Animalfeeds component.
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

  if (type === actions.DIALOG_ANIMALFEEDS_CLOSE) {
    return Object.assign({}, state, initialState);
  }


  if (type === actions.DIALOG_ANIMALFEEDS_OPEN) {
    return Object.assign({}, state, {
      open : true
    });
  }

  if (type === actions.DIALOG_ANIMALFEEDS_SUBMIT) {
    return Object.assign({}, state, {
      locked : true
    });
  }

  if (type === actions.DIALOG_ANIMALFEEDS_SUBMIT_ERROR) {
    return Object.assign({}, state, {
      locked : false,
      error : true,
      errorMessage : payload.errorMessage
    });
  }

  if (type === actions.DIALOG_ANIMALFEEDS_SUBMIT_SUCCESS) {
    return Object.assign({}, state, {
      locked : false,
      open : false
    });
  }

  return state;
}
