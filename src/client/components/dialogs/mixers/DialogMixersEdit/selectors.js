/*
* Mixers Selectors
*
* This contains all the text for the Mixers component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open : state => state.editMixersDialog.open,
  locked : state => state.editMixersDialog.locked,
  error : state => state.editMixersDialog.error,
  errorMessage : state => state.editMixersDialog.errorMessage,
  mixer : state => state.editMixersDialog.mixer
});
