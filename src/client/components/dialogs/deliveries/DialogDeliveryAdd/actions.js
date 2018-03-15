/*
* DialogDeliveryAdd Actions
*
* This contains all the text for the DialogDeliveryAdd component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_DELIVERY_CLOSE = 'DialogDeliveryAdd/DIALOG_DELIVERY_CLOSE';
export const DIALOG_DELIVERY_OPEN = 'DialogDeliveryAdd/DIALOG_DELIVERY_OPEN';
export const DIALOG_DELIVERY_SUBMIT = 'DialogDeliveryAdd/DIALOG_DELIVERY_SUBMIT';
export const DIALOG_DELIVERY_SUBMIT_SUCCESS = 'DialogDeliveryAdd/DIALOG_DELIVERY_SUBMIT_SUCCESS';
export const DIALOG_DELIVERY_SUBMIT_ERROR = 'DialogDeliveryAdd/DIALOG_DELIVERY_SUBMIT_ERROR';

function closeDialog() {
  return { type : DIALOG_DELIVERY_CLOSE };
}

function openDialog() {
  return { type : DIALOG_DELIVERY_OPEN };
}

function submitAddDelivery(delivers) {
  return { type : DIALOG_DELIVERY_SUBMIT, payload : { delivers } };
}

function responseSuccess() {
  closeDialog();
  return { type : DIALOG_DELIVERY_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_DELIVERY_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitAddDelivery, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitAddDelivery, responseError, responseSuccess };
