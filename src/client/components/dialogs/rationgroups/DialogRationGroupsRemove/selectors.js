/*
* Rationgroups Selectors
*
* This contains all the text for the Rationgroups component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.removeRationGroupsDialog.open,
  locked : state => state.removeRationGroupsDialog.locked,
  error : state => state.removeRationGroupsDialog.error,
  errorMessage : state => state.removeRationGroupsDialog.errorMessage,
  group : state => state.removeRationGroupsDialog.group,
  farmId : state => getFarmId(state)
});
