/*
* StocksPage Reducer
*
* This contains all the text for the StocksPage component.
*/
import * as actions from './actions.js';

const initialState = {
  stocks : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.STOCKS_PAGE_SET) {
    return { ...state, stocks : payload.stocks };
  }

  return state;
}
