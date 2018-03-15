/*
* DeliveryAnimalfeed Actions
*
* This contains all the text for the DeliveryAnimalfeed component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_DELIVERY_ANIMALFEED_OPEN = 'DialogDeliveryAnimalfeedEdit/DIALOG_DELIVERY_ANIMALFEED_OPEN';
export const DIALOG_DELIVERY_ANIMALFEED_CLOSE = 'DialogDeliveryAnimalfeedEdit/DIALOG_DELIVERY_ANIMALFEED_CLOSE';
export const DIALOG_DELIVERY_ANIMALFEED_SUBMIT = 'DialogDeliveryAnimalfeedEdit/DIALOG_DELIVERY_ANIMALFEED_SUBMIT';
export const DIALOG_DELIVERY_ANIMALFEED_SUBMIT_SUCCESS =
  'DialogDeliveryAnimalfeedEdit/DIALOG_DELIVERY_ANIMALFEED_SUBMIT_SUCCESS';
export const DIALOG_DELIVERY_ANIMALFEED_SUBMIT_ERROR =
  'DialogDeliveryAnimalfeedEdit/DIALOG_DELIVERY_ANIMALFEED_SUBMIT_ERROR';

function openDialog(deliveryAnimlfeed) {
  return { type : DIALOG_DELIVERY_ANIMALFEED_OPEN, payload : { deliveryAnimlfeed } };
}

function closeDialog() {
  return { type : DIALOG_DELIVERY_ANIMALFEED_CLOSE };
}

function submitEditDeliveryAnimalfeed(deliveryAnimlfeed) {
  return { type : DIALOG_DELIVERY_ANIMALFEED_SUBMIT, payload : { deliveryAnimlfeed } };
}

function responseSuccess() {
  return { type : DIALOG_DELIVERY_ANIMALFEED_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_DELIVERY_ANIMALFEED_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitEditDeliveryAnimalfeed, responseError, responseSuccess },
    dispatch);
}

export { containerActions, closeDialog, openDialog, submitEditDeliveryAnimalfeed, responseError, responseSuccess };
