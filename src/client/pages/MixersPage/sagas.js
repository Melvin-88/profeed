/*
* MixersPage Actions
*
* This contains all the text for the MixersPage component.
*/
import { takeEvery, put, call, select } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { actions as dialogAddActions } from 'client/components/dialogs/mixers/DialogMixersAdd';
import { actions as dialogEditActions } from 'client/components/dialogs/mixers/DialogMixersEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/mixers/DialogMixersRemove';
import { getFarmId } from 'helpers/selectorsHelper';
import serverApi from 'api';

function* getMixers() {
  try {
    const res = yield call(serverApi.getMixers);

    yield put(actions.setMixers(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* addMixersDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* editMixersDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.mixer));
}

function* removeMixersDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.mixer));
}

function* updateMixers() {
  const state = yield select();
  const data = {
    payload : {
      farmId : getFarmId(state)
    }
  };

  yield getMixers(data);
}

function* getFarms() {
  try {
    const result = yield call(serverApi.getFarms);

    yield put(actions.setFarms(result.data));
  } catch (e) {
    console.error('DialogMixersEdit | getFarms error ', e);
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.MIXERS_PAGE_GET, getMixers);
  yield takeEvery(actions.MIXERS_PAGE_CALL_SHOW_ADD_DIALOG, addMixersDialogShow);
  yield takeEvery(actions.MIXERS_PAGE_CALL_SHOW_EDIT_DIALOG, editMixersDialogShow);
  yield takeEvery(actions.MIXERS_PAGE_CALL_SHOW_REMOVE_DIALOG, removeMixersDialogShow);
  yield takeEvery(dialogAddActions.DIALOG_MIXERS_SUBMIT_SUCCESS, updateMixers);
  yield takeEvery(dialogEditActions.DIALOG_MIXERS_SUBMIT_SUCCESS, updateMixers);
  yield takeEvery(dialogRemoveActions.DIALOG_MIXERS_SUBMIT_SUCCESS, updateMixers);
  yield takeEvery(actions.MIXERS_PAGE_GET_FARMS, getFarms);
}
