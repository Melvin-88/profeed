/*
* DeliveryAnimalfeed Selectors
*
* This contains all the text for the DeliveryAnimalfeed component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.removeDeliveryAnimalfeedDialog.open,
  locked : state => state.removeDeliveryAnimalfeedDialog.locked,
  error : state => state.removeDeliveryAnimalfeedDialog.error,
  errorMessage : state => state.removeDeliveryAnimalfeedDialog.errorMessage,
  farmId : state => getFarmId(state)
});
