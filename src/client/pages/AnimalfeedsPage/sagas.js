/*
* AnimalfeedsPage Actions
*
* This contains all the text for the AnimalfeedsPage component.
*/
import { takeEvery, put, call, select  } from 'redux-saga/effects'; // , take, call, put, race, select
import * as actions from './actions.js';
import { actions as dialogAddActions } from 'client/components/dialogs/animalfeeds/DialogAnimalfeedsAdd';
import { actions as dialogEditActions } from 'client/components/dialogs/animalfeeds/DialogAnimalfeedsEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/animalfeeds/DialogAnimalfeedsRemove';
import { getFarmId } from 'helpers/selectorsHelper';
import serverApi from 'api';

function* getAnimalfeeds(action) {
  const { payload } = action;

  try {
    const res = yield call(serverApi.getAnimalfeeds, payload.farmId);

    yield put(actions.setAnimalfeeds(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* addAnimalfeedsDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* editAnimalfeedsDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.animalfeed));
}

function* removeAnimalfeedsDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.animalfeed));
}

function* updateAnimalfeeds() {
  const state = yield select();
  const data = {
    payload : {
      farmId : getFarmId(state)
    }
  };

  yield getAnimalfeeds(data);
}

export default function* mainSaga() {
  yield takeEvery(actions.ANIMALFEEDS_PAGE_GET, getAnimalfeeds);
  yield takeEvery(actions.ANIMALFEEDS_PAGE_CALL_SHOW_ADD_DIALOG, addAnimalfeedsDialogShow);
  yield takeEvery(actions.ANIMALFEEDS_PAGE_CALL_SHOW_EDIT_DIALOG, editAnimalfeedsDialogShow);
  yield takeEvery(actions.ANIMALFEEDS_PAGE_CALL_SHOW_REMOVE_DIALOG, removeAnimalfeedsDialogShow);
  yield takeEvery(dialogAddActions.DIALOG_ANIMALFEEDS_SUBMIT_SUCCESS, updateAnimalfeeds);
  yield takeEvery(dialogEditActions.DIALOG_ANIMALFEEDS_SUBMIT_SUCCESS, updateAnimalfeeds);
  yield takeEvery(dialogRemoveActions.DIALOG_ANIMALFEEDS_SUBMIT_SUCCESS, updateAnimalfeeds);
}
