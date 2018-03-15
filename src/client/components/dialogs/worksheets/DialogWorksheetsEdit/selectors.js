/*
* Worksheets Selectors
*
* This contains all the text for the Worksheets component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.editWorksheetsDialog.open,
  locked : state => state.editWorksheetsDialog.locked,
  error : state => state.editWorksheetsDialog.error,
  errorMessage : state => state.editWorksheetsDialog.errorMessage,
  worksheet : state => state.editWorksheetsDialog.worksheet,
  farmId : state => getFarmId(state)
});
