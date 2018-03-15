/*
* DialogGroupsAdd Selectors
*
* This contains all the text for the DialogGroupsAdd component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open: state => state.addGroupsDialog.open,
  locked : state => state.addGroupsDialog.locked,
  error : state => state.addGroupsDialog.error,
  errorMessage : state => state.addGroupsDialog.errorMessage,
  farmId : state => getFarmId(state)
});
