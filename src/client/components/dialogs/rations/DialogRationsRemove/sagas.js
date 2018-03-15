/*
* Rations Actions
*
* This contains all the text for the Rations component.
*/
import { takeEvery, put, call } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitRemoveRations(action) { // action
  const { ration } = action.payload;

  // console.log(`DialogRationsRemove | saga | submitRemoveRations | ration : ${ration}`);
  // const data = { };

  try {
    yield call(serverApi.removeRations, ration);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogFarms | submitAddFarm error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_RATIONS_SUBMIT, submitRemoveRations);
}
