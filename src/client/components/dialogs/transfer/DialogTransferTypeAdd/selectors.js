/*
* DialogTransferTypeAdd Selectors
*
* This contains all the text for the DialogTransferTypeAdd component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open: state => state.addTransferTypeDialog.open,
  locked : state => state.addTransferTypeDialog.locked,
  error : state => state.addTransferTypeDialog.error,
  errorMessage : state => state.addTransferTypeDialog.errorMessage,
  farmId : state => getFarmId(state)
});
