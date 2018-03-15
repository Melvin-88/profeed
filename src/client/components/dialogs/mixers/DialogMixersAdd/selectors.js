/*
* Mixers Selectors
*
* This contains all the text for the Mixers component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open : state => state.addMixersDialog.open,
  locked : state => state.addMixersDialog.locked,
  error : state => state.addMixersDialog.error,
  errorMessage : state => state.addMixersDialog.errorMessage
});
