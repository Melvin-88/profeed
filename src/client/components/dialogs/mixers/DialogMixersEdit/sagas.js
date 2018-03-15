/*
* Mixers Actions
*
* This contains all the text for the Mixers component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';
import { mapMixerReverseAdd } from 'helpers/mappers';

function* submitEditMixers(action) {
  const { mixer } = action.payload;

  try {
    const mappedMixer = mapMixerReverseAdd(mixer);

    yield call(serverApi.editMixer, mappedMixer);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogMixersAdd | submitEditMixers error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_MIXERS_SUBMIT, submitEditMixers);
}
