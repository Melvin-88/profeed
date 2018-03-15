/*
* DialogdeliverysEdit Actions
*
* This contains all the text for the DialogdeliverysAdd component.
*/
import { takeEvery, put, call } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';
import { mapCustomersReverse } from 'helpers/mappers';

function* submitEditCustomer(action) {
  const { customer } = action.payload;

  const data = mapCustomersReverse(customer);
  const id = data.id;

  delete data.password;
  delete data.id;

  try {
    yield call(serverApi.editCustomer, data, id);

    // console.log('DialogFarms | submitAddFarm result ', result);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogFarms | submitAddFarm error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_CUSTOMER_SUBMIT, submitEditCustomer);
}
