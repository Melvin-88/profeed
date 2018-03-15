/*
* Animalfeeds Selectors
*
* This contains all the text for the Animalfeeds component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.removeAnimalfeedsDialog.open,
  locked : state => state.removeAnimalfeedsDialog.locked,
  error : state => state.removeAnimalfeedsDialog.error,
  errorMessage : state => state.removeAnimalfeedsDialog.errorMessage,
  farmId : state => getFarmId(state),
  animalfeed : state => state.removeAnimalfeedsDialog.animalfeed
});
