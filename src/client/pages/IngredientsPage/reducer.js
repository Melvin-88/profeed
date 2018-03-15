/*
* IngredientsPage Reducer
*
* This contains all the text for the IngredientsPage component.
*/
import * as actions from './actions.js';

const initialState = {
  ingredients : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.INGREDIENTS_PAGE_SET) {
    return { ...state, ingredients : payload.ingredients };
  }

  return state;
}
