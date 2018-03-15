/*
* DialogCustomerAddSelectors
*
* This contains all the text for the DialogCustomerAddcomponent.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open: state => state.addCustomerDialog.open,
  locked : state => state.addCustomerDialog.locked,
  error : state => state.addCustomerDialog.error,
  errorMessage : state => state.addCustomerDialog.errorMessage
});
