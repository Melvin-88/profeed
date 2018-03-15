/*
* CustomersPage Actions
*
* This contains all the text for the CustomersPage component.
*/
import { takeEvery, put, call } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { actions as dialogAddActions } from 'client/components/dialogs/customers/DialogCustomerAdd';
import { actions as dialogEditActions } from 'client/components/dialogs/customers/DialogCustomerEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/customers/DialogCustomerRemove';
import serverApi from 'api';

function* getCustomers() {
  try {
    const res = yield call(serverApi.getCustomers);

    yield put(actions.setCustomers(res.data));
  } catch (e) {
    console.error('CustomerPage | sagas | getCustomers | error ', e);
  }
}

function* addCustomerDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* editCustomerDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.customer));
}

function* removeCustomerDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.customer));
}

function* updateCustomers() {
  yield getCustomers();
}

export default function* mainSaga() {
  yield takeEvery(actions.CUSTOMERS_GET, getCustomers);
  yield takeEvery(actions.CUSTOMERS_CALL_SHOW_ADD_DIALOG, addCustomerDialogShow);
  yield takeEvery(actions.CUSTOMERS_CALL_SHOW_EDIT_DIALOG, editCustomerDialogShow);
  yield takeEvery(actions.CUSTOMERS_CALL_SHOW_REMOVE_DIALOG, removeCustomerDialogShow);
  yield takeEvery(dialogAddActions.DIALOG_CUSTOMER_SUBMIT_SUCCESS, updateCustomers);
  yield takeEvery(dialogEditActions.DIALOG_CUSTOMER_SUBMIT_SUCCESS, updateCustomers);
  yield takeEvery(dialogRemoveActions.DIALOG_CUSTOMER_SUBMIT_SUCCESS, updateCustomers);
}
