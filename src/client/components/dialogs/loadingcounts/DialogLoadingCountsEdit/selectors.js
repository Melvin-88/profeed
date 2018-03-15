/*
* LoadingCounts Selectors
*
* This contains all the text for the LoadingCounts component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.editLoadingCountsDialog.open,
  locked : state => state.editLoadingCountsDialog.locked,
  error : state => state.editLoadingCountsDialog.error,
  errorMessage : state => state.editLoadingCountsDialog.errorMessage,
  loadingcount : state => state.editLoadingCountsDialog.loadingcount,
  farmId : state => getFarmId(state)
});
