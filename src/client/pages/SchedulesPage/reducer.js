/*
* SchedulesPage Reducer
*
* This contains all the text for the SchedulesPage component.
*/
import * as actions from './actions.js';

const initialState = {
  schedules : [],
  planned : null
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.SCHEDULES_PAGE_SET) {
    return { ...state, schedules : payload.schedules };
  }

  if (type === actions.SCHEDULES_PAGE_GET) {
    return { ...state, planned : payload.planned };
  }

  return state;
}
