/*
* Rationingredients Selectors
*
* This contains all the text for the Rationingredients component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.removeRationIngredientsDialog.open,
  locked : state => state.removeRationIngredientsDialog.locked,
  error : state => state.removeRationIngredientsDialog.error,
  errorMessage : state => state.removeRationIngredientsDialog.errorMessage,
  ingredient : state => state.removeRationIngredientsDialog.ingredient,
  farmId : state => getFarmId(state)
});
