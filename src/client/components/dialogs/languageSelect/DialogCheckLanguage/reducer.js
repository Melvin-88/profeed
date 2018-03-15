/*
* Register Reducer
*
* This contains all the text for the Register component.
*/
import * as actions from './actions.js';
import { LANGUAGES } from 'helpers/constants';
const initialState = {
  open : false,
  locked : false,
  error : false,
  errorMessage : '',
  languages : [ ...LANGUAGES ]
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.DIALOG_LANG_CLOSE) {
    return Object.assign({}, state, initialState);
  }


  if (type === actions.DIALOG_LANG_OPEN) {
    return Object.assign({}, state, {
      open : true
    });
  }

  if (type === actions.DIALOG_REGISTER_SUBMIT_ERROR) {
    return Object.assign({}, state, {
      locked : false,
      error : true,
      errorMessage : payload.errorMessage
    });
  }

  return state;
}
