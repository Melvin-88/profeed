/*
* DeliveryAnimalfeed Actions
*
* This contains all the text for the DeliveryAnimalfeed component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_DELIVERY_ANIMALFEED_OPEN = 'DialogDeliveryAnimalfeedRemove/DIALOG_DELIVERY_ANIMALFEED_OPEN';
export const DIALOG_DELIVERY_ANIMALFEED_CLOSE = 'DialogDeliveryAnimalfeedRemove/DIALOG_DELIVERY_ANIMALFEED_CLOSE';
export const DIALOG_DELIVERY_ANIMALFEED_SUBMIT = 'DialogDeliveryAnimalfeedRemove/DIALOG_DELIVERY_ANIMALFEED_SUBMIT';
export const DIALOG_DELIVERY_ANIMALFEED_SUBMIT_SUCCESS =
  'DialogDeliveryAnimalfeedRemove/DIALOG_DELIVERY_ANIMALFEED_SUBMIT_SUCCESS';
export const DIALOG_DELIVERY_ANIMALFEED_SUBMIT_ERROR =
  'DialogDeliveryAnimalfeedRemove/DIALOG_DELIVERY_ANIMALFEED_SUBMIT_ERROR';

function openDialog(deliveryAnimlfeed) {
  return { type : DIALOG_DELIVERY_ANIMALFEED_OPEN, payload : { deliveryAnimlfeed } };
}

function closeDialog() {
  return { type : DIALOG_DELIVERY_ANIMALFEED_CLOSE };
}

function submitRemoveDeliveryAnimalfeed(deliveryAnimlfeed) {
  return { type : DIALOG_DELIVERY_ANIMALFEED_SUBMIT, payload : { deliveryAnimlfeed } };
}

function responseSuccess() {
  return { type : DIALOG_DELIVERY_ANIMALFEED_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_DELIVERY_ANIMALFEED_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitRemoveDeliveryAnimalfeed, responseError, responseSuccess },
    dispatch);
}

export { containerActions, closeDialog, openDialog, submitRemoveDeliveryAnimalfeed, responseError, responseSuccess };
