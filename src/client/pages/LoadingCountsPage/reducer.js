/*
* LoadingCountsPage Reducer
*
* This contains all the text for the LoadingCountsPage component.
*/
import * as actions from './actions.js';

const initialState = {
  loadingcounts : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.LOADING_COUNTS_PAGE_SET) {
    return { ...state, loadingcounts : payload.loadingcounts };
  }

  return state;
}
