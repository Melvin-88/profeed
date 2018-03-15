/*
* Animalfeeds Actions
*
* This contains all the text for the Animalfeeds component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_ANIMALFEEDS_OPEN = 'DialogAnimalfeedsAdd/DIALOG_ANIMALFEEDS_OPEN';
export const DIALOG_ANIMALFEEDS_CLOSE = 'DialogAnimalfeedsAdd/DIALOG_ANIMALFEEDS_CLOSE';
export const DIALOG_ANIMALFEEDS_SUBMIT = 'DialogAnimalfeedsAdd/DIALOG_ANIMALFEEDS_SUBMIT';
export const DIALOG_ANIMALFEEDS_SUBMIT_SUCCESS = 'DialogAnimalfeedsAdd/DIALOG_ANIMALFEEDS_SUBMIT_SUCCESS';
export const DIALOG_ANIMALFEEDS_SUBMIT_ERROR = 'DialogAnimalfeedsAdd/DIALOG_ANIMALFEEDS_SUBMIT_ERROR';

function openDialog() {
  return { type : DIALOG_ANIMALFEEDS_OPEN };
}

function closeDialog() {
  return { type : DIALOG_ANIMALFEEDS_CLOSE };
}

function submitAddAnimalfeeds(animalfeed) {
  return { type : DIALOG_ANIMALFEEDS_SUBMIT, payload : { animalfeed } };
}

function responseSuccess() {
  return { type : DIALOG_ANIMALFEEDS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_ANIMALFEEDS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitAddAnimalfeeds, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitAddAnimalfeeds, responseError, responseSuccess };
