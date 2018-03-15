/*
* Rationingredients Selectors
*
* This contains all the text for the Rationingredients component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.editRationIngredientsDialog.open,
  locked : state => state.editRationIngredientsDialog.locked,
  error : state => state.editRationIngredientsDialog.error,
  errorMessage : state => state.editRationIngredientsDialog.errorMessage,
  ingredient : state => state.editRationIngredientsDialog.ingredient,
  farmId : state => getFarmId(state)
});
