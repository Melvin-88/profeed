/*
* GroupPage Selectors
*
* This contains all the text for the GroupPage component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  permission : state => {
    return state.app.permissions.find((item) => item.label === 'manager' && item.name === 'group');
  },
  groups: state => state.groupsPage.groups,
  farmId : state => getFarmId(state)
});
