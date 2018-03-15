/*
* RationLoadingCounts Actions
*
* This contains all the text for the RationLoadingCounts component.
*/
import { takeEvery, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';

function* submitRemoveRationLoadingCounts() {
  // const { name } = action.payload;

  // const data = { };

  try {
    // yield call(serverApi.removeRationLoadingCounts, data);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogFarms | submitAddFarm error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_RATION_LOADING_COUNTS_SUBMIT, submitRemoveRationLoadingCounts);
}
