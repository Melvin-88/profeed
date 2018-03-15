/*
* SchedulesPage Actions
*
* This contains all the text for the SchedulesPage component.
*/
import { takeEvery, call, put, select } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { actions as dialogRemoveActions } from 'client/components/dialogs/schedules/DialogSchedulesRemove';
import { actions as dialogAddActions } from 'client/components/dialogs/schedules/DialogSchedulesAdd';
import serverApi from 'api';
import { urlMakerFromTemplate } from 'helpers/urlsPrepare';
import config from 'config';
import { push } from 'react-router-redux';
import { getFarmId } from 'helpers/selectorsHelper';

function* getSchedules(action) {
  const { farmId, planned } = action.payload;

  try {
    const res = yield call(serverApi.getScheduleRations, farmId, planned);

    yield put(actions.setSchedules(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* changePage(action) {
  const { farmId, scheduleId } = action.payload;
  const url = urlMakerFromTemplate(config.URLS.SCHEDULE_EDIT, { id : farmId, scheduleId });

  if (url) {
    yield put(push(`/${url}`));
  }
}

function* removeSchedulesDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.schedules));
}

function* addSchedulesDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* updateSchedules() {
  const state = yield select();
  const data = {
    payload : {
      farmId : getFarmId(state),
      planned : state.schedulesPage.planned
    }
  };

  yield getSchedules(data);
}

export default function* mainSaga() {
  yield takeEvery(actions.SCHEDULES_PAGE_GET, getSchedules);
  yield takeEvery(actions.SCHEDULES_PAGE_GOTO, changePage);
  yield takeEvery(actions.SCHEDULES_PAGE_CALL_SHOW_REMOVE_DIALOG, removeSchedulesDialogShow);
  yield takeEvery(dialogRemoveActions.DIALOG_SCHEDULES_SUBMIT_SUCCESS, updateSchedules);
  yield takeEvery(actions.SCHEDULES_PAGE_CALL_SHOW_ADD_DIALOG, addSchedulesDialogShow);
  yield takeEvery(dialogAddActions.DIALOG_SCHEDULES_SUBMIT_SUCCESS, updateSchedules);
}
