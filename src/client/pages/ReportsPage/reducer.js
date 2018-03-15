/*
* ReportsPage Reducer
*
* This contains all the text for the ReportsPage component.
*/
import * as actions from './actions.js';

const initialState = {
  userReports : [],
  reports : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.REPORTS_PAGE_SET) {
    return { ...state, userReports : payload.userReports };
  }

  if (type === actions.REPORTS_PAGE_MAIN_REPORT_SET) {
    return { ...state, reports : payload.reports };
  }

  return state;
}
