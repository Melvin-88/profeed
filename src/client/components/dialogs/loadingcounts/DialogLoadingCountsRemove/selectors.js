/*
* LoadingCounts Selectors
*
* This contains all the text for the LoadingCounts component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.removeLoadingCountsDialog.open,
  locked : state => state.removeLoadingCountsDialog.locked,
  error : state => state.removeLoadingCountsDialog.error,
  errorMessage : state => state.removeLoadingCountsDialog.errorMessage,
  loadingcount : state => state.removeLoadingCountsDialog.loadingcount,
  farmId : state => getFarmId(state)
});
