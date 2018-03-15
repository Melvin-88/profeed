/*
 * TableRationLoadingCounts Actions
 *
 * This contains all the text for the TableRationLoadingCounts component.
 */
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import { actions as dialogAddActions } from 'client/components/dialogs/rationloadingcounts/DialogRationLoadingCountsAdd';
import { actions as dialogEditActions } from 'client/components/dialogs/rationloadingcounts/DialogRationLoadingCountsEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/rationloadingcounts/DialogRationLoadingCountsRemove';
import * as actions from './actions.js';

import serverApi from 'api';

function* getLoadings(action) {
  const { payload } = action;

  // console.log(action);

  try {
    const res = yield call(serverApi.getLoadingCounts, payload.farmId);

    yield put(actions.setLoadingCounts(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* getMixers(action) {
  const { payload } = action;

  // console.log(action);

  try {
    const res = yield call(serverApi.getMixers, payload.farmId);

    yield put(actions.setMixers(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* addTableRationLoadingCountsDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* editTableRationLoadingCountsDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.loadingCount));
}

function* removeTableRationLoadingCountsDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.loadingCount));
}

export default function* mainSaga() {
  yield takeEvery(actions.TABLE_RATION_LOADINGCOUNT_GET_LOADINGCOUNTS, getLoadings);
  yield takeEvery(actions.TABLE_RATION_LOADINGCOUNT_GET_MIXERS, getMixers);
  yield takeEvery(actions.TABLE_RATION_LOADINGCOUNT_SHOW_ADD_DIALOG, addTableRationLoadingCountsDialogShow);
  yield takeEvery(actions.TABLE_RATION_LOADINGCOUNT_SHOW_EDIT_DIALOG, editTableRationLoadingCountsDialogShow);
  yield takeEvery(actions.TABLE_RATION_LOADINGCOUNT_SHOW_REMOVE_DIALOG, removeTableRationLoadingCountsDialogShow);
}
