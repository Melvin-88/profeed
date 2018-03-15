/*
* TransfersPage Actions
*
* This contains all the text for the TransfersPage component.
*/
import { bindActionCreators } from 'redux';

export const TRANSFERS_GET = 'TransfersPage/TRANSFERS_GET';
export const TRANSFERS_SET = 'TransfersPage/TRANSFERS_SET';
export const TRANSFERS_CALL_SHOW_ADD_DIALOG = 'TransfersPage/TRANSFERS_CALL_SHOW_ADD_DIALOG';
export const TRANSFERS_CALL_SHOW_ADD_TYPE_DIALOG = 'TransfersPage/TRANSFERS_CALL_SHOW_ADD_TYPE_DIALOG';

function getTransfers(farmId) {
  return { type : TRANSFERS_GET, payload : { farmId } };
}

function setTransfers(transfers) {
  return { type : TRANSFERS_SET, payload : { transfers } };
}

function showTransferAddDialog() {
  return { type : TRANSFERS_CALL_SHOW_ADD_DIALOG };
}

function showTransferTypeAddDialog() {
  return { type : TRANSFERS_CALL_SHOW_ADD_TYPE_DIALOG };
}

function containerActions(dispatch) {
  return bindActionCreators({ getTransfers, setTransfers, showTransferAddDialog, showTransferTypeAddDialog }, dispatch);
}

export { containerActions, getTransfers, setTransfers, showTransferAddDialog, showTransferTypeAddDialog };
