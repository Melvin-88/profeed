/*
* DialogFarmsEdit Selectors
*
* This contains all the text for the DialogFarmsEdit component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open: state => state.editFarmsDialog.open,
  locked : state => state.editFarmsDialog.locked,
  error : state => state.editFarmsDialog.error,
  errorMeassage : state => state.editFarmsDialog.errorMeassage,
  farm : state => state.editFarmsDialog.farm
});
