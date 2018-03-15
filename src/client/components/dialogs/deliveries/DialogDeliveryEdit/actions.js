/*
* DialogGroupsEdit Actions
*
* This contains all the text for the DialogGroupsEdit component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_DELIVERY_CLOSE = 'DialogDeliveryEdit/DIALOG_DELIVERY_CLOSE';
export const DIALOG_DELIVERY_OPEN = 'DialogDeliveryEdit/DIALOG_DELIVERY_OPEN';
export const DIALOG_DELIVERY_SUBMIT = 'DialogDeliveryEdit/DIALOG_DELIVERY_SUBMIT';
export const DIALOG_DELIVERY_SUBMIT_SUCCESS = 'DialogDeliveryEdit/DIALOG_DELIVERY_SUBMIT_SUCCESS';
export const DIALOG_DELIVERY_SUBMIT_ERROR = 'DialogDeliveryEdit/DIALOG_DELIVERY_SUBMIT_ERROR';

function closeDialog() {
  return { type : DIALOG_DELIVERY_CLOSE };
}

function openDialog(delivery) {
  return { type : DIALOG_DELIVERY_OPEN, payload : { delivery } };
}

function submitEditDelivery(delivery) {
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
  return bindActionCreators({ closeDialog, openDialog, submitEditDelivery, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitEditDelivery, responseError, responseSuccess };
