/*
 * DialogCustomerEdit Actions
 *
 * This contains all the text for the DialogCustomerEdit component.
 */
import { bindActionCreators } from 'redux';

export const DIALOG_CUSTOMER_CLOSE = 'DialogCustomerEdit/DIALOG_CUSTOMER_CLOSE';
export const DIALOG_CUSTOMER_OPEN = 'DialogCustomerEdit/DIALOG_CUSTOMER_OPEN';
export const DIALOG_CUSTOMER_SUBMIT = 'DialogCustomerEdit/DIALOG_CUSTOMER_SUBMIT';
export const DIALOG_CUSTOMER_SUBMIT_SUCCESS = 'DialogCustomerEdit/DIALOG_CUSTOMER_SUBMIT_SUCCESS';
export const DIALOG_CUSTOMER_SUBMIT_ERROR = 'DialogCustomerEdit/DIALOG_CUSTOMER_SUBMIT_ERROR';

function closeDialog() {
  return { type : DIALOG_CUSTOMER_CLOSE };
}

function openDialog(customer) {
  return { type : DIALOG_CUSTOMER_OPEN, payload : { customer } };
}

function submit(customer) {
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
