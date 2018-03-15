/*
* CustomersPage Selectors
*
* This contains all the text for the CustomersPage component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  permission : state => {
    return state.app.permissions.find((item) => item.label === 'permission' && item.name === 'employee');
  },
  customers: state => state.customersPage.customers,
  farms : state => state.farmsPage.farms,
  userGroups : state => state.userGroupsPage.usergroups
});
