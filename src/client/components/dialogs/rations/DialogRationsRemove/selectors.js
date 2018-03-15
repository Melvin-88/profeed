/*
* Rations Selectors
*
* This contains all the text for the Rations component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  open : state => state.removeRationsDialog.open,
  locked : state => state.removeRationsDialog.locked,
  error : state => state.removeRationsDialog.error,
  errorMessage : state => state.removeRationsDialog.errorMessage,
  ration : state => state.removeRationsDialog.ration,
  farmId : state => getFarmId(state)
});
