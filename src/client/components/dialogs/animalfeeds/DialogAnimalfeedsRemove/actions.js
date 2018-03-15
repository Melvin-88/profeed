/*
* Animalfeeds Actions
*
* This contains all the text for the Animalfeeds component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_ANIMALFEEDS_OPEN = 'DialogAnimalfeedsRemove/DIALOG_ANIMALFEEDS_OPEN';
export const DIALOG_ANIMALFEEDS_CLOSE = 'DialogAnimalfeedsRemove/DIALOG_ANIMALFEEDS_CLOSE';
export const DIALOG_ANIMALFEEDS_SUBMIT = 'DialogAnimalfeedsRemove/DIALOG_ANIMALFEEDS_SUBMIT';
export const DIALOG_ANIMALFEEDS_SUBMIT_SUCCESS = 'DialogAnimalfeedsRemove/DIALOG_ANIMALFEEDS_SUBMIT_SUCCESS';
export const DIALOG_ANIMALFEEDS_SUBMIT_ERROR = 'DialogAnimalfeedsRemove/DIALOG_ANIMALFEEDS_SUBMIT_ERROR';

function openDialog(animalfeed) {
  return { type : DIALOG_ANIMALFEEDS_OPEN, payload : { animalfeed } };
}

function closeDialog() {
  return { type : DIALOG_ANIMALFEEDS_CLOSE };
}

function submitRemoveAnimalfeeds(animalfeedId) {
  return { type : DIALOG_ANIMALFEEDS_SUBMIT, payload : { animalfeedId } };
}

function responseSuccess() {
  return { type : DIALOG_ANIMALFEEDS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_ANIMALFEEDS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitRemoveAnimalfeeds, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitRemoveAnimalfeeds, responseError, responseSuccess };
