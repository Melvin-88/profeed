/*
* DeliveryAnimalfeed Actions
*
* This contains all the text for the DeliveryAnimalfeed component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitRemoveDeliveryAnimalfeed(action) {
  const { deliveryAnimlfeed } = action.payload;

  try {
    yield call(serverApi.removeDeliveryAnimalfeed, deliveryAnimlfeed);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogFarms | submitAddFarm error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_DELIVERY_ANIMALFEED_SUBMIT, submitRemoveDeliveryAnimalfeed);
}
