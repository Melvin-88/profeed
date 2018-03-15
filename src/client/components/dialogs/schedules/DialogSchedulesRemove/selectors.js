/*
* Schedules Selectors
*
* This contains all the text for the Schedules component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.removeSchedulesDialog.open,
  locked : state => state.removeSchedulesDialog.locked,
  error : state => state.removeSchedulesDialog.error,
  errorMessage : state => state.removeSchedulesDialog.errorMessage,
  schedule : state => state.removeSchedulesDialog.schedule,
  farmId : state => getFarmId(state)
});
