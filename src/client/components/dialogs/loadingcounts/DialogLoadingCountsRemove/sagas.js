/*
* LoadingCounts Actions
*
* This contains all the text for the LoadingCounts component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitRemoveLoadingCounts(action) {
  const { loadingcount } = action.payload;

  const data = { id : loadingcount.id };

  try {
    yield call(serverApi.removeLoadingCount, data);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogLoadingCountsRemove | submitRemoveLoadingCounts error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_LOADING_COUNTS_SUBMIT, submitRemoveLoadingCounts);
}
