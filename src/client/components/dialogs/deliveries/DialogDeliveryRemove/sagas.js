/*
* DialogGroupsRemove Actions
*
* This contains all the text for the DialogGroupsAdd component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitRemoveDelivery(action) {
  const { delivery } = action.payload;

  // console.log('DialogDeliversARemove | submitRemoveFarm delivers ', delivery);
  try {
    yield call(serverApi.removeDelivery, delivery);

    // console.log('DialogDeliveryRemove | submitRemoveFarm result ', result);

    yield put(actions.closeDialog());
  } catch (e) {
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_DELIVERY_SUBMIT, submitRemoveDelivery);
}
