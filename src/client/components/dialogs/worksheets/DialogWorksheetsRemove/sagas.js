/*
* Worksheets Actions
*
* This contains all the text for the Worksheets component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitRemoveWorksheets(action) {
  const data = action.payload;

  try {
    yield call(serverApi.removeWorksheets, { ...data.worksheet });
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogFarms | submitAddFarm error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_WORKSHEETS_SUBMIT, submitRemoveWorksheets);
}
