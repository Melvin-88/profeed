/*
* DialogFarmsRemove Selectors
*
* This contains all the text for the DialogFarmsRemove component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open: state => state.removeFarmsDialog.open,
  locked : state => state.removeFarmsDialog.locked,
  error : state => state.removeFarmsDialog.error,
  errorMeassage : state => state.removeFarmsDialog.errorMeassage,
  farm : state => state.removeFarmsDialog.farm
});
