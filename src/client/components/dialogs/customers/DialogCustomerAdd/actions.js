/*
* DialogCustomerAdd Actions
*
* This contains all the text for the DialogCustomerAdd component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_CUSTOMER_CLOSE = 'DialogCustomerAdd/DIALOG_CUSTOMER_CLOSE';
export const DIALOG_CUSTOMER_OPEN = 'DialogCustomerAdd/DIALOG_CUSTOMER_OPEN';
export const DIALOG_CUSTOMER_SUBMIT = 'DialogCustomerAdd/DIALOG_CUSTOMER_SUBMIT';
export const DIALOG_CUSTOMER_SUBMIT_SUCCESS = 'DialogCustomerAdd/DIALOG_CUSTOMER_SUBMIT_SUCCESS';
export const DIALOG_CUSTOMER_SUBMIT_ERROR = 'DialogCustomerAdd/DIALOG_CUSTOMER_SUBMIT_ERROR';

function closeDialog() {
  return { type : DIALOG_CUSTOMER_CLOSE };
}

function openDialog() {
  return { type : DIALOG_CUSTOMER_OPEN };
}

function submit(customer) {
  console.log('DialogCustomerAdd | actions | submit ', DIALOG_CUSTOMER_SUBMIT);
  return { type : DIALOG_CUSTOMER_SUBMIT, payload : { customer } };
}

function responseSuccess() {
  closeDialog();
  return { type : DIALOG_CUSTOMER_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_CUSTOMER_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submit, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submit, responseError, responseSuccess };
