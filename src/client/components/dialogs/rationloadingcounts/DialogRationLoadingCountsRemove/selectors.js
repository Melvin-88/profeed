/*
* RationLoadingCounts Selectors
*
* This contains all the text for the RationLoadingCounts component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.removeRationLoadingCountsDialog.open,
  locked : state => state.removeRationLoadingCountsDialog.locked,
  error : state => state.removeRationLoadingCountsDialog.error,
  errorMessage : state => state.removeRationLoadingCountsDialog.errorMessage,
  loadingCount : state => state.removeRationLoadingCountsDialog.loadingCount,
  farmId : state => getFarmId(state)
});
