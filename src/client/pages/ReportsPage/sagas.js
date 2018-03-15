/*
* ReportsPage Actions
*
* This contains all the text for the ReportsPage component.
*/
import { takeEvery, put, call } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
/* import { actions as dialogAddActions } from 'client/components/dialogs/reports/DialogReportsAdd';
import { actions as dialogRemoveActions } from 'client/components/dialogs/reports/DialogReportsRemove';*/
// import { getFarmId } from 'helpers/selectorsHelper';
import { actions as dialogEditActions } from 'client/components/dialogs/reports/DialogReportsEdit';
import serverApi from 'api';
import { mapUserReports, mapReport } from 'helpers/mappers';

function* getUserReports(action) {
  const { payload } = action;

  try {
    const res = yield call(serverApi.getUserReports, payload.farmId);

    yield put(actions.setUserReports(res.data.map(item => mapUserReports(item))));
  } catch (e) {
    console.error('error ', e);
  }
}

function* addReportsDialogShow() {
  // yield put(dialogAddActions.openDialog());
}

function* editReportsDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.report));
}

function* removeReportsDialogShow() {
  // yield put(dialogRemoveActions.openDialog(action.payload.reports));
}

function* getReports() {
  try {
    const res = yield call(serverApi.getReports);

    yield put(actions.setMainReports(res.data.map(item => mapReport(item))));
  } catch (e) {
    console.error('error ', e);
  }
}

/* function* updateReports() {
  const state = yield select();
  const data = {
    payload : {
      farmId : getFarmId(state)
    }
  };

  yield getReports(data);
}*/

export default function* mainSaga() {
  yield takeEvery(actions.REPORTS_PAGE_GET, getUserReports);
  yield takeEvery(actions.REPORTS_PAGE_CALL_SHOW_ADD_DIALOG, addReportsDialogShow);
  yield takeEvery(actions.REPORTS_PAGE_CALL_SHOW_EDIT_DIALOG, editReportsDialogShow);
  yield takeEvery(actions.REPORTS_PAGE_CALL_SHOW_REMOVE_DIALOG, removeReportsDialogShow);
  yield takeEvery(actions.REPORTS_PAGE_MAIN_REPORT_GET, getReports);
  /* yield takeEvery(dialogAddActions.DIALOG_REPORTS_SUBMIT_SUCCESS, updateReports);
  yield takeEvery(dialogRemoveActions.DIALOG_REPORTS_SUBMIT_SUCCESS, updateReports);*/
}
