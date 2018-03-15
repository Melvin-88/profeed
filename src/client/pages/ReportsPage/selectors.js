/*
* ReportsPage Selectors
*
* This contains all the text for the ReportsPage component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  permission : state => state.app.permissions.find((item) => item.name === 'report' && item.label === 'report'),
  reports: state => state.reportsPage.userReports,
  farmId : state => getFarmId(state)
});
