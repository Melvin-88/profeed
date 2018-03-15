/*
* UserGroups Selectors
*
* This contains all the text for the UserGroups component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open : state => state.removeUserGroupsDialog.open,
  locked : state => state.removeUserGroupsDialog.locked,
  error : state => state.removeUserGroupsDialog.error,
  errorMessage : state => state.removeUserGroupsDialog.errorMessage,
  group : state => state.removeUserGroupsDialog.group
});
