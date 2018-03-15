/*
* TransfersPage Reducer
*
* This contains all the text for the TransfersPage component.
*/
import * as actions from './actions.js';

const initialState = {
  transfers : []
};

export default function (state = initialState, action = {}) { //
  const { type, payload } = action;

  if (actions.TRANSFERS_SET === type) {
    return { ...state, transfers: payload.transfers };
  }

  return state;
}
