/*
* Rationgroups Selectors
*
* This contains all the text for the Rationgroups component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.addRationGroupsDialog.open,
  locked : state => state.addRationGroupsDialog.locked,
  error : state => state.addRationGroupsDialog.error,
  errorMessage : state => state.addRationGroupsDialog.errorMessage,
  farmId : state => getFarmId(state)
});
