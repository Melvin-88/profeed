/*
* Animalfeeds Actions
*
* This contains all the text for the Animalfeeds component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitEditAnimalfeeds(action) {
  const { animalfeed } = action.payload;

  try {
    yield call(serverApi.editAnimalfeeds, animalfeed);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogAnimalfeeds | submitEditAnimalfeeds error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_ANIMALFEEDS_SUBMIT, submitEditAnimalfeeds);
}
