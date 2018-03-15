/*
* TransfersPage Actions
*
* This contains all the text for the TransfersPage component.
*/
import { takeEvery, put, call, select } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { actions as actionsAddDialog } from 'client/components/dialogs/transfer/DialogTransferAdd';
import { actions as actionsTypeAddDialog } from 'client/components/dialogs/transfer/DialogTransferTypeAdd';
import serverApi from 'api';
import { getFarmId } from 'helpers/selectorsHelper';

function* getTransfers(action) {
  // console.log('TransfersPage | sagas | *getTransfers | action ', action);
  const { payload } = action;

  try {
    const res = yield call(serverApi.getTransfers, payload.farmId);

    // console.log('TransfersPage | sagas | *getTransfers | res ', res);
    yield put(actions.setTransfers(res.data));
  } catch (e) {
    // console.log('TransfersPage | sagas | *getTransfers | error ', e.message);
  }
}

function* addTransfersDialogShow() {
  yield put(actionsAddDialog.openDialog());
}

function* addTransfersTypeDialogShow() {
  yield put(actionsTypeAddDialog.openDialog());
}

function* updateTransfers() {
  const state = yield select();
  const data = {
    payload : {
      farmId : getFarmId(state)
    }
  };

  // console.log('TransferPage | sagas | updateTransfers | state ', state);

  yield getTransfers(data);
}

export default function* mainSaga() {
  yield takeEvery(actions.TRANSFERS_GET, getTransfers);
  yield takeEvery(actions.TRANSFERS_CALL_SHOW_ADD_DIALOG, addTransfersDialogShow);
  yield takeEvery(actionsAddDialog.DIALOG_TRANSFERS_SUBMIT_SUCCESS, updateTransfers);
  yield takeEvery(actions.TRANSFERS_CALL_SHOW_ADD_TYPE_DIALOG, addTransfersTypeDialogShow);
}
