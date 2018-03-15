/*
* RationLoadingCounts Selectors
*
* This contains all the text for the RationLoadingCounts component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.addRationLoadingCountsDialog.open,
  locked : state => state.addRationLoadingCountsDialog.locked,
  error : state => state.addRationLoadingCountsDialog.error,
  errorMessage : state => state.addRationLoadingCountsDialog.errorMessage,
  farmId : state => getFarmId(state)
});
