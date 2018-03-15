/*
* DialogCustomerAdd Actions
*
* This contains all the text for the DialogCustomerAdd component.
*/
import { takeEvery, put, call } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';
import { mapCustomersReverse } from 'helpers/mappers';

function* submitAddCustomer(action) {
  const { customer } = action.payload;

  const data = mapCustomersReverse(customer);

  try {
    yield call(serverApi.addNewCustomer, data);

    // console.log('DialogFarms | submitAddFarm result ', result);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogCustomerAdd | submitAddCustomer error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_CUSTOMER_SUBMIT, submitAddCustomer);
}
