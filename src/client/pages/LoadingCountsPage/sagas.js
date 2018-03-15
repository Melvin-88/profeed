/*
* LoadingCountsPage Actions
*
* This contains all the text for the LoadingCountsPage component.
*/
import { takeEvery, put, call, select } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { actions as dialogAddActions } from 'client/components/dialogs/loadingcounts/DialogLoadingCountsAdd';
import { actions as dialogEditActions } from 'client/components/dialogs/loadingcounts/DialogLoadingCountsEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/loadingcounts/DialogLoadingCountsRemove';
import { getFarmId } from 'helpers/selectorsHelper';
import serverApi from 'api';

function* getLoadingCounts(action) {
  const { payload } = action;

  try {
    const res = yield call(serverApi.getLoadingCounts, payload.farmId);

    yield put(actions.setLoadingCounts(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* addLoadingCountsDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* editLoadingCountsDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.loadingcounts));
}

function* removeLoadingCountsDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.loadingcounts));
}

function* updateLoadingCounts() {
  const state = yield select();
  const data = {
    payload : {
      farmId : getFarmId(state)
    }
  };

  yield getLoadingCounts(data);
}

export default function* mainSaga() {
  yield takeEvery(actions.LOADING_COUNTS_PAGE_GET, getLoadingCounts);
  yield takeEvery(actions.LOADING_COUNTS_PAGE_CALL_SHOW_ADD_DIALOG, addLoadingCountsDialogShow);
  yield takeEvery(actions.LOADING_COUNTS_PAGE_CALL_SHOW_EDIT_DIALOG, editLoadingCountsDialogShow);
  yield takeEvery(actions.LOADING_COUNTS_PAGE_CALL_SHOW_REMOVE_DIALOG, removeLoadingCountsDialogShow);
  yield takeEvery(dialogAddActions.DIALOG_LOADING_COUNTS_SUBMIT_SUCCESS, updateLoadingCounts);
  yield takeEvery(dialogEditActions.DIALOG_LOADING_COUNTS_SUBMIT_SUCCESS, updateLoadingCounts);
  yield takeEvery(dialogRemoveActions.DIALOG_LOADING_COUNTS_SUBMIT_SUCCESS, updateLoadingCounts);
}
