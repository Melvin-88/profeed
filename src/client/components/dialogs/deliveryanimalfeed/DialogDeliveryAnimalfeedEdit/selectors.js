/*
* DeliveryAnimalfeed Selectors
*
* This contains all the text for the DeliveryAnimalfeed component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.editDeliveryAnimalfeedDialog.open,
  locked : state => state.editDeliveryAnimalfeedDialog.locked,
  error : state => state.editDeliveryAnimalfeedDialog.error,
  errorMessage : state => state.editDeliveryAnimalfeedDialog.errorMessage,
  deliveryAnimlfeed : state => state.editDeliveryAnimalfeedDialog.deliveryAnimlfeed,
  ingredients: state => state.ingredientsPage.ingredients.filter(item => item.is_animalfeed),
  farmId : state => getFarmId(state)
});
