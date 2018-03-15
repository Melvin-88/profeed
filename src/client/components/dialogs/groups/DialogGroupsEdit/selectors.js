/*
* DialogGroupsAdd Selectors
*
* This contains all the text for the DialogGroupsAdd component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open: state => state.editGroupsDialog.open,
  locked : state => state.editGroupsDialog.locked,
  error : state => state.editGroupsDialog.error,
  errorMessage : state => state.editGroupsDialog.errorMessage,
  group : state => state.editGroupsDialog.group,
  farmId : state => getFarmId(state)
});
