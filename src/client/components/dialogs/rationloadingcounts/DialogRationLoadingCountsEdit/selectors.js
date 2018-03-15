/*
* RationLoadingCounts Selectors
*
* This contains all the text for the RationLoadingCounts component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.editRationLoadingCountsDialog.open,
  locked : state => state.editRationLoadingCountsDialog.locked,
  error : state => state.editRationLoadingCountsDialog.error,
  errorMessage : state => state.editRationLoadingCountsDialog.errorMessage,
  loadingCount : state => state.editRationLoadingCountsDialog.loadingCount,
  farmId : state => getFarmId(state)
});
