/*
* DeliveryAnimalfeed Selectors
*
* This contains all the text for the DeliveryAnimalfeed component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.addDeliveryAnimalfeedDialog.open,
  locked : state => state.addDeliveryAnimalfeedDialog.locked,
  error : state => state.addDeliveryAnimalfeedDialog.error,
  errorMessage : state => state.addDeliveryAnimalfeedDialog.errorMessage,
  ingredients: state => state.ingredientsPage.ingredients.filter(item => item.is_animalfeed),
  farmId : state => getFarmId(state)
});
