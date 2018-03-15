/*
* DialogDeliverysAdd Actions
*
* This contains all the text for the DialogDeliverysAdd component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitAddDelivery(action) {
  const { delivers  } = action.payload;

  const data = {
    'farm' : delivers.farmId,
    'ingredient':  delivers.deliveryName,
    'amount':  delivers.amountKg,
    'price':  delivers.sumCount
  };

  try {
    yield call(serverApi.addNewDelivery, data);

    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogFarms | submitAddFarm error ', e);
    yield put(actions.responseError(e.message));
    yield put(actions.closeDialog());
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_DELIVERY_SUBMIT, submitAddDelivery);
}
