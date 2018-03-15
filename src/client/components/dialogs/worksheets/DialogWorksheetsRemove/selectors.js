/*
* Worksheets Selectors
*
* This contains all the text for the Worksheets component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open : state => state.removeWorksheetsDialog.open,
  locked : state => state.removeWorksheetsDialog.locked,
  error : state => state.removeWorksheetsDialog.error,
  errorMessage : state => state.removeWorksheetsDialog.errorMessage,
  worksheet : state => state.removeWorksheetsDialog.worksheet
});
