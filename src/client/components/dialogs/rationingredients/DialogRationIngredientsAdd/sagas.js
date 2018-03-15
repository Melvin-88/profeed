/*
* Rationingredients Actions
*
* This contains all the text for the Rationingredients component.
*/
import { takeEvery, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';

function* submit() {
  try {
    yield put(actions.closeDialog());
  } catch (e) {
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_RATIONINGREDIENTS_SUBMIT, submit);
}
