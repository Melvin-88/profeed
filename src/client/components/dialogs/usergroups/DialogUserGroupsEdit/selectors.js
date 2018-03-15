/*
* UserGroups Selectors
*
* This contains all the text for the UserGroups component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open : state => state.editUserGroupsDialog.open,
  locked : state => state.editUserGroupsDialog.locked,
  error : state => state.editUserGroupsDialog.error,
  errorMessage : state => state.editUserGroupsDialog.errorMessage,
  group : state => state.editUserGroupsDialog.group
});
