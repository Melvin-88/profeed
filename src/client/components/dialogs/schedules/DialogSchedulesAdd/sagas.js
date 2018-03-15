/*
* Schedules Actions
*
* This contains all the text for the Schedules component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';
import { mapScheduleReverseAdd } from 'helpers/mappers';
import moment from 'moment';

function* submitAddSchedules(action) {
  const { schedule } = action.payload;

  schedule.planned = moment(new Date(schedule.planned)).format('YYYY-MM-DD');

  try {
    const serverSchedule = mapScheduleReverseAdd(schedule);

    yield call(serverApi.addSchedules, serverSchedule);
    yield put(actions.closeDialog());
  } catch (e) {
    yield put(actions.responseError(e.message));
  }
}

function* getRationsForSchedules(action) {
  const { farmId } = action.payload;

  try {
    const result = yield call(serverApi.getRations, farmId);

    yield put(actions.setRations(result.data));
  } catch (e) {
    console.error('DialogSchedulesAdd | getRationsForSchedules | error : ', e);
    yield put(actions.setRations([]));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_SCHEDULES_SUBMIT, submitAddSchedules);
  yield takeEvery(actions.DIALOG_SCHEDULES_GET_RATIONS, getRationsForSchedules);
}
