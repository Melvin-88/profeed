/*
* Lang Reducer
*
* This contains all the text for the Lang component.
*/
import * as actions from './actions.js';

const initialState = {
  language : 'en'
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  if (type === actions.SET_LOCALE) {
    return { ...state, language : payload.language };
  }

  return state;
}
