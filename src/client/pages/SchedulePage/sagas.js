/*
* RationPage Actions
*
* This contains all the text for the RationPage component.
*/
import { takeEvery, put, call, select } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { urlMakerFromTemplate } from 'helpers/urlsPrepare';
import config from 'config';
import { push } from 'react-router-redux';
import serverApi from 'api';
import { mapScheduleReverseEdit } from 'helpers/mappers';
import { getFarmId } from 'helpers/selectorsHelper';
import moment from 'moment';

function* getSchedule(action) {
  const { payload } = action;

  try {
    const res = yield call(serverApi.getSchedule, payload.scheduleId);

    yield put(actions.setSchedule(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* saveSchedule(action) {
  const { payload } = action;
  // console.log(payload.schedule);
  const { schedule, groups, ingredients, loadingCount } = payload.schedule;

  schedule.planned = moment(new Date(schedule.planned)).format('YYYY-MM-DD');
  const newSchedule = mapScheduleReverseEdit({ schedule, groups, ingredients, loadingCount });
  // console.log(newSchedule);
  const state = yield select();
  const farmId = getFarmId(state);

  try {
    yield call(serverApi.editSchedule, newSchedule, schedule.id);

    const url = urlMakerFromTemplate(config.URLS.SCHEDULES, { id : farmId });

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
  yield takeEvery(actions.SCHEDULE_PAGE_GET, getSchedule);
  yield takeEvery(actions.SCHEDULE_PAGE_SAVE_SCHEDULE, saveSchedule);
  yield takeEvery(actions.SCHEDULE_PAGE_EXIT, exit);
}
