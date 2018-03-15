/*
* DialogTransferAdd Actions
*
* This contains all the text for the DialogTransferAdd component.
*/
import { takeEvery, put, call } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitAddTransfer(action) {
  const { transfer } = action.payload;

  const data = {
    'group' : transfer.groupChecked,
    'transfer_list' : transfer.transferlistChecked,
    'animal_count' : transfer.animalCount,
    'farm' : transfer.farmId
  };

  if (transfer.group2Checked) {
    data.group2 = transfer.group2Checked;
  }

  try {
    yield call(serverApi.addNewTransfer, data);

    // console.log('DialogTransferAdd | submitAddTransfer result ', result);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogTransferAdd | submitAddTransfer error ', e);
    yield put(actions.responseError(e.message));
  }
}

function* loadDataSelectTransfer(action) {
  const { farmId } = action.payload;

  try {
    const groups = yield call(serverApi.getGroups, farmId);
    const transferlist = yield call(serverApi.getTransferlist, farmId);

    // console.log('DialogTransferAdd | loadDataSelectTransfer groups, transferlist ', groups, transferlist);
    yield put(actions.setDataForSelects({ groups : groups.data, transferlist : transferlist.data }));
  } catch (e) {
    console.error('DialogTransferAdd | submitAddTransfer error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_TRANSFERS_SUBMIT, submitAddTransfer);
  yield takeEvery(actions.DIALOG_TRANSFERS_DATA_SELECT_GET, loadDataSelectTransfer);
}
