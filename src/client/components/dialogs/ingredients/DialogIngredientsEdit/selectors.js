/*
* Ingredients Selectors
*
* This contains all the text for the Ingredients component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open: state => state.editIngredientsDialog.open,
  locked : state => state.editIngredientsDialog.locked,
  error : state => state.editIngredientsDialog.error,
  errorMessage : state => state.editIngredientsDialog.errorMessage,
  ingredient : state => state.editIngredientsDialog.ingredient,
  farmId : state => getFarmId(state)
});
