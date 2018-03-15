/*
* Schedules Selectors
*
* This contains all the text for the Schedules component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.addSchedulesDialog.open,
  locked : state => state.addSchedulesDialog.locked,
  error : state => state.addSchedulesDialog.error,
  errorMessage : state => state.addSchedulesDialog.errorMessage,
  rations : state => [ ...state.addSchedulesDialog.rations ],
  farmId : state => getFarmId(state)
});
