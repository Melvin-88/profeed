/*
* RationsPage Selectors
*
* This contains all the text for the RationsPage component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  permission : state => {
    return state.app.permissions.find((item) => item.label === 'manager' && item.name === 'ration');
  },
  rations: state => state.rationsPage.rations,
  farmId : state => getFarmId(state)
});
