/*
* FarmsDialog Actions
*
* This contains all the text for the FarmsDialog component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitAddFarm(action) {
  const { farm } = action.payload;

  const data = {
    name : farm.name,
    settings: {
      language: farm.language,
      timezone: farm.timezone
    }
  };

  try {
    yield call(serverApi.addNewFarm, data);

    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogFarms | submitAddFarm error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_FARMS_SUBMIT, submitAddFarm);
}
