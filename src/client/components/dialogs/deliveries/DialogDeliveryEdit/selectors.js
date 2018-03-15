/*
* DialogGroupsAdd Selectors
*
* This contains all the text for the DialogGroupsAdd component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open: state => state.editDeliveryDialog.open,
  locked : state => state.editDeliveryDialog.locked,
  error : state => state.editDeliveryDialog.error,
  errorMessage : state => state.editDeliveryDialog.errorMessage,
  delivery : state => state.editDeliveryDialog.delivery,
  farmId : state => getFarmId(state),
  ingredients: state => state.ingredientsPage.ingredients.filter(item => !item.is_animalfeed)
});
