/*
* RationPage Actions
*
* This contains all the text for the RationPage component.
*/
import { takeEvery, put, call } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { PAGE_TYPE } from 'helpers/constants';
import { urlMakerFromTemplate } from 'helpers/urlsPrepare';
import config from 'config';
import { push } from 'react-router-redux';
import serverApi from 'api';

function* getRation(action) {
  const { payload } = action;

  try {
    const res = yield call(serverApi.getRation, payload.rationId);

    yield put(actions.setRation(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* saveRation(action) {
  const { payload } = action;
  let func = null;

  // console.log(action);

  if (payload && payload.type === PAGE_TYPE.ADD) {
    func = serverApi.addRation;
  } else if (payload && payload.type === PAGE_TYPE.EDIT) {
    func = serverApi.editRation;
  } else {
    return;
  }

  try {
    yield call(func, payload.ration);

    const url = urlMakerFromTemplate(config.URLS.RATIONS, { id : payload.ration.farm });

    yield put(push(`/${url}`));
  } catch (e) {
    console.error('error ', e);
  }
}

function* exit(action) {
  const { payload } = action;

  const url = urlMakerFromTemplate(config.URLS.RATIONS, { id : payload.farm });

  yield put(push(`/${url}`));
}

export default function* mainSaga() {
  yield takeEvery(actions.RATION_PAGE_GET, getRation);
  yield takeEvery(actions.RATION_PAGE_SAVE_RATION, saveRation);
  yield takeEvery(actions.RATION_PAGE_EXIT, exit);
}
