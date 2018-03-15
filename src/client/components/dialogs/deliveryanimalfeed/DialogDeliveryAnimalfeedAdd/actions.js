/*
* DeliveryAnimalfeed Actions
*
* This contains all the text for the DeliveryAnimalfeed component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_DELIVERY_ANIMALFEED_OPEN = 'DialogDeliveryAnimalfeedAdd/DIALOG_DELIVERY_ANIMALFEED_OPEN';
export const DIALOG_DELIVERY_ANIMALFEED_CLOSE = 'DialogDeliveryAnimalfeedAdd/DIALOG_DELIVERY_ANIMALFEED_CLOSE';
export const DIALOG_DELIVERY_ANIMALFEED_SUBMIT = 'DialogDeliveryAnimalfeedAdd/DIALOG_DELIVERY_ANIMALFEED_SUBMIT';
export const DIALOG_DELIVERY_ANIMALFEED_SUBMIT_SUCCESS =
  'DialogDeliveryAnimalfeedAdd/DIALOG_DELIVERY_ANIMALFEED_SUBMIT_SUCCESS';
export const DIALOG_DELIVERY_ANIMALFEED_SUBMIT_ERROR =
  'DialogDeliveryAnimalfeedAdd/DIALOG_DELIVERY_ANIMALFEED_SUBMIT_ERROR';

function openDialog() {
  return { type : DIALOG_DELIVERY_ANIMALFEED_OPEN };
}

function closeDialog() {
  return { type : DIALOG_DELIVERY_ANIMALFEED_CLOSE };
}

function submitAddDeliveryAnimalfeed(deliveryAnimlfeed) {
  return { type : DIALOG_DELIVERY_ANIMALFEED_SUBMIT, payload : { deliveryAnimlfeed } };
}

function responseSuccess() {
  return { type : DIALOG_DELIVERY_ANIMALFEED_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_DELIVERY_ANIMALFEED_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitAddDeliveryAnimalfeed, responseError, responseSuccess },
    dispatch);
}

export { containerActions, closeDialog, openDialog, submitAddDeliveryAnimalfeed, responseError, responseSuccess };
