/*
* DialogTransferAdd Selectors
*
* This contains all the text for the DialogTransferAdd component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open: state => state.addTransferDialog.open,
  locked : state => state.addTransferDialog.locked,
  error : state => state.addTransferDialog.error,
  errorMessage : state => state.addTransferDialog.errorMessage,
  groups :  state => state.addTransferDialog.groups,
  transferlist :  state => state.addTransferDialog.transferlist,
  farmId : state => getFarmId(state)
});
