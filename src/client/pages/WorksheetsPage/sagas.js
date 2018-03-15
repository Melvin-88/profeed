/*
* WorksheetsPage Actions
*
* This contains all the text for the WorksheetsPage component.
*/
import { takeEvery, put, call, select } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { actions as dialogEditActions } from 'client/components/dialogs/worksheets/DialogWorksheetsEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/worksheets/DialogWorksheetsRemove';
import { getFarmId } from 'helpers/selectorsHelper';
import { mapWorksheets } from 'helpers/mappers';
import serverApi from 'api';

function* getWorksheets(action) {
  const { payload } = action;

  try {
    const res = yield call(serverApi.getWorksheets, payload.farmId);

    yield put(actions.setWorksheets(res.data.map(item => mapWorksheets(item))));
  } catch (e) {
    console.error('error ', e);
  }
}

function* addWorksheetsDialogShow() {
  yield put(dialogEditActions.openDialog());
}

function* editWorksheetsDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.worksheets));
}

function* removeWorksheetsDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.worksheets));
}

function* updateWorksheets() {
  const state = yield select();
  const data = {
    payload : {
      farmId : getFarmId(state)
    }
  };

  yield getWorksheets(data);
}

export default function* mainSaga() {
  yield takeEvery(actions.WORKSHEETS_PAGE_GET, getWorksheets);
  yield takeEvery(actions.WORKSHEETS_PAGE_CALL_SHOW_ADD_DIALOG, addWorksheetsDialogShow);
  yield takeEvery(actions.WORKSHEETS_PAGE_CALL_SHOW_EDIT_DIALOG, editWorksheetsDialogShow);
  yield takeEvery(actions.WORKSHEETS_PAGE_CALL_SHOW_REMOVE_DIALOG, removeWorksheetsDialogShow);
  yield takeEvery(dialogEditActions.DIALOG_WORKSHEETS_SUBMIT_SUCCESS, updateWorksheets);
  yield takeEvery(dialogRemoveActions.DIALOG_WORKSHEETS_SUBMIT_SUCCESS, updateWorksheets);
}
