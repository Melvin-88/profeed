/*
* Rationgroups Selectors
*
* This contains all the text for the Rationgroups component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.editRationGroupsDialog.open,
  locked : state => state.editRationGroupsDialog.locked,
  error : state => state.editRationGroupsDialog.error,
  errorMessage : state => state.editRationGroupsDialog.errorMessage,
  group : state => state.editRationGroupsDialog.group,
  farmId : state => getFarmId(state)
});
