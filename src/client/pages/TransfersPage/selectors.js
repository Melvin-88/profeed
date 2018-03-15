/*
* TransfersPage Selectors
*
* This contains all the text for the TransfersPage component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  permission : state => {
    return state.app.permissions.find((item) => item.label === 'manager' && item.name === 'grouptransferlist');
  },
  permissionAdditional : state => {
    return state.app.permissions.find((item) => item.label === 'manager' && item.name === 'grouptransfer');
  },
  transfers: state => state.transfersPage.transfers,
  farmId : state => getFarmId(state)
});
