/*
* UserGroups Selectors
*
* This contains all the text for the UserGroups component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open : state => state.addUserGroupsDialog.open,
  locked : state => state.addUserGroupsDialog.locked,
  error : state => state.addUserGroupsDialog.error,
  errorMessage : state => state.addUserGroupsDialog.errorMessage
});
