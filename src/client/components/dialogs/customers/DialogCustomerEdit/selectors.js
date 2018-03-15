/*
* DialogGroupsAdd Selectors
*
* This contains all the text for the DialogGroupsAdd component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open: state => state.editCustomerDialog.open,
  locked : state => state.editCustomerDialog.locked,
  error : state => state.editCustomerDialog.error,
  errorMessage : state => state.editCustomerDialog.errorMessage,
  customer : state => state.editCustomerDialog.customer
});
