/*
* DialogdeliverysEdit Actions
*
* This contains all the text for the DialogdeliverysAdd component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitEditDelivery(action) {
  const { delivery } = action.payload;

  try {
    yield call(serverApi.editDelivery, delivery);

    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogDeliveryEdit | submitEditDelivery error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_DELIVERY_SUBMIT, submitEditDelivery);
}
