/*
* Mixers Actions
*
* This contains all the text for the Mixers component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitRemoveMixers(action) {
  const { mixer } = action.payload;

  try {
    yield call(serverApi.removeMixer, mixer);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogFarms | submitAddFarm error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_MIXERS_SUBMIT, submitRemoveMixers);
}
