/*
* DialogTransferAdd Reducer
*
* This contains all the text for the DialogTransferAdd component.
*/
import * as actions from './actions.js';

const initialState = {
  open : false,
  locked : false,
  error : false,
  errorMessage : '',
  groups : [],
  transferlist : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.DIALOG_TRANSFERS_CLOSE) {
    return Object.assign({}, state, initialState);
  }

  if (type === actions.DIALOG_TRANSFERS_OPEN) {
    // console.log('DialogTransfersAdd | reducer | DIALOG_TRANSFER_OPEN ');
    return Object.assign({}, state, {
      open : true
    });
  }

  if (type === actions.DIALOG_TRANSFERS_DATA_SELECT_SET) {
    const { groups, transferlist } = payload;

    return { ...state, groups, transferlist };
  }

  if (type === actions.DIALOG_TRANSFERS_SUBMIT) {
    return Object.assign({}, state, {
      locked : true
    });
  }

  if (type === actions.DIALOG_TRANSFERS_SUBMIT_ERROR) {
    return Object.assign({}, state, {
      locked : false,
      error : true,
      errorMessage : payload.errorMesssage
    });
  }

  if (type === actions.DIALOG_TRANSFERS_SUBMIT_SUCCESS) {
    return Object.assign({}, state, {
      locked : false,
      open : false
    });
  }

  return state;
}
