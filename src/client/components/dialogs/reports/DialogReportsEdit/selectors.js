/*
* Reports Selectors
*
* This contains all the text for the Reports component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.editReportsDialog.open,
  locked : state => state.editReportsDialog.locked,
  error : state => state.editReportsDialog.error,
  errorMessage : state => state.editReportsDialog.errorMessage,
  report : state => state.editReportsDialog.report,
  usergroups: state => state.userGroupsPage.usergroups || [],
  reports : state => state.reportsPage.reports || [],
  farmId : state => getFarmId(state)
});
