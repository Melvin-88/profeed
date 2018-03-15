/*
* HistoryPage Actions
*
* This contains all the text for the HistoryPage component.
*/
import { takeEvery, put, call } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* getHistory(action) {
  const { payload } = action;

  try {
    const res = yield call(serverApi.getHistory, { farmId : payload.farmId, chapter : payload.chapter.name });

    yield put(actions.setHistory(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.HISTORY_PAGE_GET, getHistory);
}
