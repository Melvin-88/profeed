/*
* TableRationIngredients Reducer
*
* This contains all the text for the TableRationIngredients component.
*/
import * as actions from './actions.js';

const initialState = {
  ingredients : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (actions.TABLE_RATION_INGREDIENTS_SET_INGREDIENTS === type) {
    return { ...state, ingredients : payload.ingredients };
  }

  return state;
}
