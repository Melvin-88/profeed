/*
* FarmsDialog Selectors
*
* This contains all the text for the FarmsDialog component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open: state => state.addFarmsDialog.open,
  locked : state => state.addFarmsDialog.locked,
  error : state => state.addFarmsDialog.error,
  errorMessage : state => state.addFarmsDialog.errorMessage
});
