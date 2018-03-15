/*
* AnimalfeedsPage Reducer
*
* This contains all the text for the AnimalfeedsPage component.
*/
import * as actions from './actions.js';

const initialState = {
  animalfeeds : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.ANIMALFEEDS_PAGE_SET) {
    return { ...state, animalfeeds : payload.animalfeeds };
  }

  return state;
}
