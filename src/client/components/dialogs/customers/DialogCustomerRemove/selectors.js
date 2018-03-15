/*
* DialogGroupsAdd Selectors
*
* This contains all the text for the DialogGroupsAdd component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open: state => state.removeCustomersDialog.open,
  locked : state => state.removeCustomersDialog.locked,
  error : state => state.removeCustomersDialog.error,
  errorMessage : state => state.removeCustomersDialog.errorMessage,
  customer : state => state.removeCustomersDialog.customer
});
