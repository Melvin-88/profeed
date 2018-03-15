/*
* DialogGroupsAdd Selectors
*
* This contains all the text for the DialogGroupsAdd component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open: state => state.removeDeliveryDialog.open,
  locked : state => state.removeDeliveryDialog.locked,
  error : state => state.removeDeliveryDialog.error,
  errorMessage : state => state.removeDeliveryDialog.errorMessage,
  delivery : state => state.removeDeliveryDialog.delivery,
  farmId : state => getFarmId(state)
});
