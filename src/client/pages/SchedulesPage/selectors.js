/*
* SchedulesPage Selectors
*
* This contains all the text for the SchedulesPage component.
*/

import { createStructuredSelector } from 'reselect';
import moment from 'moment';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  permission : state => {
    return state.app.permissions.find((item) => item.label === 'schedule' && item.name === 'ration');
  },
  schedules: state => state.schedulesPage.schedules,
  loadingCounts : state => state.rationLoadingCountsTable.loadingCounts,
  planned : state => {
    return state.schedulesPage.planned ? state.schedulesPage.planned : moment(new Date()).format('YYYY-MM-DD');
  },
  farmId : state => getFarmId(state)
});
