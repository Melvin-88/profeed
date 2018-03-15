/*
* Animalfeeds Selectors
*
* This contains all the text for the Animalfeeds component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.addAnimalfeedsDialog.open,
  locked : state => state.addAnimalfeedsDialog.locked,
  error : state => state.addAnimalfeedsDialog.error,
  errorMessage : state => state.addAnimalfeedsDialog.errorMessage,
  ingredients : state => state.ingredientsPage.ingredients.filter(item => !item.is_animalfeed),
  animalfeeds : state => state.ingredientsPage.ingredients.filter(item => item.is_animalfeed),
  farmId : state => getFarmId(state)
});
