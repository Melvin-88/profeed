/*
* Schedules Actions
*
* This contains all the text for the Schedules component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitRemoveSchedules(action) {
  const { schedule } = action.payload;

  try {
    yield call(serverApi.removeSchedules, schedule);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogSchedulesRemove | submitRemoveSchedules error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_SCHEDULES_SUBMIT, submitRemoveSchedules);
}
