/*
* DeliveryPage Actions
*
* This contains all the text for the DeliveryPage component.
*/
import { takeEvery, put, call, select } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { actions as dialogAddActions } from 'client/components/dialogs/deliveries/DialogDeliveryAdd';
import { actions as dialogEditActions } from 'client/components/dialogs/deliveries/DialogDeliveryEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/deliveries/DialogDeliveryRemove';
import { getFarmId } from 'helpers/selectorsHelper';
import serverApi from 'api';

function* getDelivers(action) {
  const { payload } = action;

  // console.log('DeliversPage | sagas | getDelivers | payload ', payload);
  try {
    const res = yield call(serverApi.getDelivers, payload.farmId);

    yield put(actions.setDelivers(res.data));
  } catch (e) {
    console.error('DeliversPage | sagas | getDelivers | error ', e);
  }
}

function* addDeliveryDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* editDeliveryDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.delivery));
}

function* removeDeliveryDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.delivery));
}

function* updateDelivers() {
  const state = yield select();
  const data = {
    payload : {
      farmId : getFarmId(state)
    }
  };

  // console.log('DeliversPage | sagas | updateDelivers | state ', state);

  yield getDelivers(data);
}

export default function* mainSaga() {
  yield takeEvery(actions.DELIVERS_GET, getDelivers);
  yield takeEvery(actions.DELIVERS_CALL_SHOW_ADD_DIALOG, addDeliveryDialogShow);
  yield takeEvery(actions.DELIVERS_CALL_SHOW_EDIT_DIALOG, editDeliveryDialogShow);// DELIVERS_CALL_SHOW_EDIT_DIALOG
  yield takeEvery(actions.DELIVERS_CALL_SHOW_REMOVE_DIALOG, removeDeliveryDialogShow);
  yield takeEvery(dialogAddActions.DIALOG_DELIVERY_SUBMIT_SUCCESS, updateDelivers);
  yield takeEvery(dialogEditActions.DIALOG_DELIVERY_SUBMIT_SUCCESS, updateDelivers);
  yield takeEvery(dialogRemoveActions.DIALOG_DELIVERY_SUBMIT_SUCCESS, updateDelivers);
}
