/*
* DialogDeliveryRemove Actions
*
* This contains all the text for the DialogDeliveryRemove component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_DELIVERY_CLOSE = 'DialogDeliveryRemove/DIALOG_DELIVERY_CLOSE';
export const DIALOG_DELIVERY_OPEN = 'DialogDeliveryRemove/DIALOG_DELIVERY_OPEN';
export const DIALOG_DELIVERY_SUBMIT = 'DialogDeliveryRemove/DIALOG_DELIVERY_SUBMIT';
export const DIALOG_DELIVERY_SUBMIT_SUCCESS = 'DialogDeliveryRemove/DIALOG_DELIVERY_SUBMIT_SUCCESS';
export const DIALOG_DELIVERY_SUBMIT_ERROR = 'DialogDeliveryRemove/DIALOG_DELIVERY_SUBMIT_ERROR';

function closeDialog() {
  return { type : DIALOG_DELIVERY_CLOSE };
}

function openDialog(delivery) {
  return { type : DIALOG_DELIVERY_OPEN, payload : {  delivery } };
}

function submitRemoveDelivery(delivery) {
  return { type : DIALOG_DELIVERY_SUBMIT, payload : { delivery } };
}

function responseSuccess() {
  closeDialog();
  return { type : DIALOG_DELIVERY_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_DELIVERY_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitRemoveDelivery, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitRemoveDelivery, responseError, responseSuccess };
