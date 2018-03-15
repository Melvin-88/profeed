/*
* Mixers Selectors
*
* This contains all the text for the Mixers component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.removeMixersDialog.open,
  locked : state => state.removeMixersDialog.locked,
  error : state => state.removeMixersDialog.error,
  errorMessage : state => state.removeMixersDialog.errorMessage,
  mixer : state => state.removeMixersDialog.mixer,
  farmId : state => getFarmId(state)
});
