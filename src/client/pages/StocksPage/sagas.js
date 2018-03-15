/*
* StocksPage Actions
*
* This contains all the text for the StocksPage component.
*/
import { takeEvery, put, call } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* getStocks(action) {
  const { payload } = action;

  try {
    const res = yield call(serverApi.getStocks, payload.farmId);

    yield put(actions.setStocks(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.STOCKS_PAGE_GET, getStocks);
}
