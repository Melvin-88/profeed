/*
* Ingredients Selectors
*
* This contains all the text for the Ingredients component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open: state => state.removeIngredientsDialog.open,
  locked : state => state.removeIngredientsDialog.locked,
  error : state => state.removeIngredientsDialog.error,
  errorMessage : state => state.removeIngredientsDialog.errorMessage,
  ingredient : state => state.removeIngredientsDialog.ingredient,
  farmId : state => getFarmId(state)
});
