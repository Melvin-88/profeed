/*
* Worksheets Actions
*
* This contains all the text for the Worksheets component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { mapWorksheetsReverse } from 'helpers/mappers';
import serverApi from 'api';

function* submitEditWorksheets(action) {
  const { worksheet } = action.payload;
  console.log('>>> ', worksheet);
  const serverMethod = worksheet && worksheet.id ? serverApi.editWorksheet : serverApi.addWorksheet;

  try {
    yield call(serverMethod, mapWorksheetsReverse(worksheet));

    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogWorksheets | submitEditWorksheets error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_WORKSHEETS_SUBMIT, submitEditWorksheets);
}
