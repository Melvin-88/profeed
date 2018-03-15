/*
* DialogGroupsAdd Selectors
*
* This contains all the text for the DialogGroupsAdd component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open: state => state.removeGroupsDialog.open,
  locked : state => state.removeGroupsDialog.locked,
  error : state => state.removeGroupsDialog.error,
  errorMessage : state => state.removeGroupsDialog.errorMessage,
  groups : state => state.removeGroupsDialog.groups,
  farmId : state => getFarmId(state)
});
