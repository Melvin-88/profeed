/*
 * TableRationLoadingCounts Actions
 *
 * This contains all the text for the TableRationLoadingCounts component.
 */
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';

import serverApi from 'api';

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

export default function* mainSaga() {
  yield takeEvery(actions.TABLE_SCHEDULE_RATION_LOADINGCOUNT_GET_MIXERS, getMixers);
}
