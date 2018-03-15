/*
* DeliveryAnimalfeedPage Actions
*
* This contains all the text for the DeliveryAnimalfeedPage component.
*/
import { takeEvery, put, call, select } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { actions as dialogAddActions } from 'client/components/dialogs/deliveryanimalfeed/DialogDeliveryAnimalfeedAdd';
import { actions as dialogEditActions } from 'client/components/dialogs/deliveryanimalfeed/DialogDeliveryAnimalfeedEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/deliveryanimalfeed/DialogDeliveryAnimalfeedRemove';
import { getFarmId } from 'helpers/selectorsHelper';
import serverApi from 'api';

function* getDeliveryAnimalfeed(action) {
  const { payload } = action;

  try {
    const res = yield call(serverApi.getDeliveryAnimalfeed, payload.farmId);

    yield put(actions.setDeliveryAnimalfeed(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* addDeliveryAnimalfeedDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* editDeliveryAnimalfeedDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.deliveryanimalfeed));
}

function* removeDeliveryAnimalfeedDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.deliveryanimalfeed));
}

function* updateDeliveryAnimalfeed() {
  const state = yield select();
  const data = {
    payload : {
      farmId : getFarmId(state)
    }
  };

  yield getDeliveryAnimalfeed(data);
}

export default function* mainSaga() {
  yield takeEvery(actions.DELIVERY_ANIMALFEED_PAGE_GET, getDeliveryAnimalfeed);
  yield takeEvery(actions.DELIVERY_ANIMALFEED_PAGE_CALL_SHOW_ADD_DIALOG, addDeliveryAnimalfeedDialogShow);
  yield takeEvery(actions.DELIVERY_ANIMALFEED_PAGE_CALL_SHOW_EDIT_DIALOG, editDeliveryAnimalfeedDialogShow);
  yield takeEvery(actions.DELIVERY_ANIMALFEED_PAGE_CALL_SHOW_REMOVE_DIALOG, removeDeliveryAnimalfeedDialogShow);
  yield takeEvery(dialogAddActions.DIALOG_DELIVERY_ANIMALFEED_SUBMIT_SUCCESS, updateDeliveryAnimalfeed);
  yield takeEvery(dialogEditActions.DIALOG_DELIVERY_ANIMALFEED_SUBMIT_SUCCESS, updateDeliveryAnimalfeed);
  yield takeEvery(dialogRemoveActions.DIALOG_DELIVERY_ANIMALFEED_SUBMIT_SUCCESS, updateDeliveryAnimalfeed);
}
