/*
* Animalfeeds Selectors
*
* This contains all the text for the Animalfeeds component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.editAnimalfeedsDialog.open,
  locked : state => state.editAnimalfeedsDialog.locked,
  error : state => state.editAnimalfeedsDialog.error,
  errorMessage : state => state.editAnimalfeedsDialog.errorMessage,
  ingredients : state => state.ingredientsPage.ingredients.filter(item => !item.is_animalfeed),
  animalfeeds : state => state.ingredientsPage.ingredients.filter(item => item.is_animalfeed),
  animalfeed : state => state.editAnimalfeedsDialog.animalfeed,
  farmId : state => getFarmId(state)
});
