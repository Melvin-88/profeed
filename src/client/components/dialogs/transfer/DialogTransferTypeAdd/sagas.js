/*
* DialogTransferTypeAdd Actions
*
* This contains all the text for the DialogTransferTypeAdd component.
*/
import { takeEvery, put, call } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitAddTypeTransfer(action) {
  const { transfer } = action.payload;

  const data = {
    'farm' : transfer.farmId,
    'name' : transfer.name,
    'transfer_type' : transfer.transferType
  };

  try {
    yield call(serverApi.addNewTransferType, data);

    // console.log('DialogTransferTypeAdd | submitAddTypeTransfer result ', result);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogTransferTypeAdd | submitAddTypeTransfer error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_TRANSFERS_TYPE_SUBMIT, submitAddTypeTransfer);
}
