/*
* Animalfeeds Actions
*
* This contains all the text for the Animalfeeds component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitRemoveAnimalfeeds(action) {
  const { animalfeedId } = action.payload;

  // const data = { };

  try {
    yield call(serverApi.removeAnimalfeeds, animalfeedId);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogAnimalfeedsRemove | submitRemoveAnimalfeeds error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_ANIMALFEEDS_SUBMIT, submitRemoveAnimalfeeds);
}
