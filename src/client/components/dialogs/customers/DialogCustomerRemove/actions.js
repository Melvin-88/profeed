/*
* DialogCustomerRemove Actions
*
* This contains all the text for the DialogCustomerRemove component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_CUSTOMER_CLOSE = 'DialogCustomerRemove/DIALOG_CUSTOMER_CLOSE';
export const DIALOG_CUSTOMER_OPEN = 'DialogCustomerRemove/DIALOG_CUSTOMER_OPEN';
export const DIALOG_CUSTOMER_SUBMIT = 'DialogCustomerRemove/DIALOG_CUSTOMER_SUBMIT';
export const DIALOG_CUSTOMER_SUBMIT_SUCCESS = 'DialogCustomerRemove/DIALOG_CUSTOMER_SUBMIT_SUCCESS';
export const DIALOG_CUSTOMER_SUBMIT_ERROR = 'DialogCustomerRemove/DIALOG_CUSTOMER_SUBMIT_ERROR';

function closeDialog() {
  return { type : DIALOG_CUSTOMER_CLOSE };
}

function openDialog(customer) {
  debugger;
  return { type : DIALOG_CUSTOMER_OPEN, payload : {  customer } };
}

function submitRemoveDelivery(customer) {
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
  return bindActionCreators({ closeDialog, openDialog, submitRemoveDelivery, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitRemoveDelivery, responseError, responseSuccess };
