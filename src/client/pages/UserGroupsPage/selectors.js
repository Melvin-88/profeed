/*
* UserGroupsPage Selectors
*
* This contains all the text for the UserGroupsPage component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  permission : state => {
    return state.app.permissions.find((item) => item.label === 'permission' && item.name === 'perm_group');
  },
  usergroups: state => state.userGroupsPage.usergroups,
  settings: state => state.userGroupsPage.settings
});
