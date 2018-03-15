/*
* Ingredients Selectors
*
* This contains all the text for the Ingredients component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open: state => state.addIngredientsDialog.open,
  locked : state => state.addIngredientsDialog.locked,
  error : state => state.addIngredientsDialog.error,
  errorMessage : state => state.addIngredientsDialog.errorMessage,
  farmId : state => getFarmId(state)
});
