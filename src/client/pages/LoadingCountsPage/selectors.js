/*
* LoadingCountsPage Selectors
*
* This contains all the text for the LoadingCountsPage component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  permission : state => {
    return state.app.permissions.find((item) => item.label === 'manager' && item.name === 'loadingcount');
  },
  loadingcounts: state => state.loadingCountsPage.loadingcounts,
  farmId : state => getFarmId(state)
});
