/*
* RationPage Selectors
*
* This contains all the text for the RationPage component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  schedule: state => state.schedulePage.schedule,
  groups: state => state.schedulePage.groups,
  loadingCount: state => state.schedulePage.loadingCount,
  ingredients: state => state.schedulePage.ingredients,
  scheduleId : (state, ownProps) => ownProps.params.scheduleId,
  rations: state => state.rationsPage.rations && [ ...state.rationsPage.rations ],
  loadingCounts : state => state.rationLoadingCountsTable.loadingCounts,
  permission : state => {
    return state.app.permissions.find((item) => item.label === 'schedule' && item.name === 'ration');
  },
  farmId : state => getFarmId(state)
});
