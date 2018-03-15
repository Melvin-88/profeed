/*
* DialogGroupsRemove Actions
*
* This contains all the text for the DialogGroupsAdd component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitRemoveCustomer(action) {
  const { customer } = action.payload;

  try {
    yield call(serverApi.removeCustomer, customer.id);

    // console.log('DialogCustomerRemove | submitRemoveFarm result ', result);

    yield put(actions.closeDialog());
  } catch (e) {
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_CUSTOMER_SUBMIT, submitRemoveCustomer);
}
