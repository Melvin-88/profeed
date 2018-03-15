/*
* UserGroups Selectors
*
* This contains all the text for the UserGroups component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open : state => state.editPermissionsUserGroupsDialog.open,
  locked : state => state.editPermissionsUserGroupsDialog.locked,
  error : state => state.editPermissionsUserGroupsDialog.error,
  errorMessage : state => state.editPermissionsUserGroupsDialog.errorMessage,
  usergroup : state => state.editPermissionsUserGroupsDialog.usergroup
});
