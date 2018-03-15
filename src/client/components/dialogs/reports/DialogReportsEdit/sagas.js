/*
* Reports Actions
*
* This contains all the text for the Reports component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';
import { mapUserReportsReverse } from 'helpers/mappers';

function* submitEditReports(action) {
  const { report } = action.payload;

  console.log('>>> ', report);
  const serverMethod = report && report.id ? serverApi.editWorksheet : serverApi.addWorksheet;

  try {
    yield call(serverMethod, mapUserReportsReverse(report));

    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogFarms | submitAddFarm error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_REPORTS_SUBMIT, submitEditReports);
}
