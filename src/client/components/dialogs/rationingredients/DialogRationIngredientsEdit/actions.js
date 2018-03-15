/*
* Rationingredients Actions
*
* This contains all the text for the Rationingredients component.
*/
import { bindActionCreators } from 'redux';
const prefixConst = 'DialogRationIngredientsEdit';

export const DIALOG_RATIONINGREDIENTS_OPEN = `${prefixConst}/DIALOG_RATIONINGREDIENTS_OPEN`;
export const DIALOG_RATIONINGREDIENTS_CLOSE = `${prefixConst}/DIALOG_RATIONINGREDIENTS_CLOSE`;
export const DIALOG_RATIONINGREDIENTS_SUBMIT = `${prefixConst}/DIALOG_RATIONINGREDIENTS_SUBMIT`;
export const DIALOG_RATIONINGREDIENTS_SUBMIT_SUCCESS = `${prefixConst}/DIALOG_RATIONINGREDIENTS_SUBMIT_SUCCESS`;
export const DIALOG_RATIONINGREDIENTS_SUBMIT_ERROR = `${prefixConst}/DIALOG_RATIONINGREDIENTS_SUBMIT_ERROR`;

function openDialog(ingredient) {
  return { type : DIALOG_RATIONINGREDIENTS_OPEN, payload : { ingredient } };
}

function closeDialog() {
  return { type : DIALOG_RATIONINGREDIENTS_CLOSE };
}

function submitData(ingredient) {
  return { type : DIALOG_RATIONINGREDIENTS_SUBMIT, payload : { ingredient } };
}

function responseSuccess() {
  return { type : DIALOG_RATIONINGREDIENTS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_RATIONINGREDIENTS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitData, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitData, responseError, responseSuccess };
