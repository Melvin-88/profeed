/*
* IngredientsPage Selectors
*
* This contains all the text for the IngredientsPage component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  permission : state => {
    return state.app.permissions.find((item) => item.label === 'manager' && item.name === 'ingredient');
  },
  ingredients: state => state.ingredientsPage.ingredients,
  farmId : state => getFarmId(state)
});
