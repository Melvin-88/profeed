/*
* Rationingredients Selectors
*
* This contains all the text for the Rationingredients component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.addRationIngredientsDialog.open,
  locked : state => state.addRationIngredientsDialog.locked,
  error : state => state.addRationIngredientsDialog.error,
  errorMessage : state => state.addRationIngredientsDialog.errorMessage,
  farmId : state => getFarmId(state)
});
