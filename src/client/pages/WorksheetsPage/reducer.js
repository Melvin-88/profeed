/*
* WorksheetsPage Reducer
*
* This contains all the text for the WorksheetsPage component.
*/
import * as actions from './actions.js';

const initialState = {
  worksheets : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.WORKSHEETS_PAGE_SET) {
    return { ...state, worksheets : payload.worksheets };
  }

  return state;
}
