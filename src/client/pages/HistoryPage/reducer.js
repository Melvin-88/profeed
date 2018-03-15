/*
 * HistoryPage Reducer
 *
 * This contains all the text for the HistoryPage component.
 */
import * as actions from './actions.js';

const initialState = {
  history: [],
  chapter: null
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.HISTORY_PAGE_SET) {
    return { ...state, history: payload.history };
  }

  if (type === actions.HISTORY_PAGE_SET_CHAPTER) {
    return { ...state, chapter : payload.chapter, history : [] };
  }

  return state;
}
