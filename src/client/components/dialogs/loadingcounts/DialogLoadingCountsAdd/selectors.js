/*
* LoadingCounts Selectors
*
* This contains all the text for the LoadingCounts component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.addLoadingCountsDialog.open,
  locked : state => state.addLoadingCountsDialog.locked,
  error : state => state.addLoadingCountsDialog.error,
  errorMessage : state => state.addLoadingCountsDialog.errorMessage,
  farmId : state => getFarmId(state)
});
