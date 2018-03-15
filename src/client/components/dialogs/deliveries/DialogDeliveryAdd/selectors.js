/*
* DialogGroupsAdd Selectors
*
* This contains all the text for the DialogGroupsAdd component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open: state => state.addDeliveryDialog.open,
  locked : state => state.addDeliveryDialog.locked,
  error : state => state.addDeliveryDialog.error,
  errorMessage : state => state.addDeliveryDialog.errorMessage,
  farmId : state => getFarmId(state),
  ingredients: state => state.ingredientsPage.ingredients.filter(item => !item.is_animalfeed)
});
