/*
* Ingredients Actions
*
* This contains all the text for the Ingredients component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_INGREDIENTS_OPEN = 'DialogIngredientsAdd/DIALOG_INGREDIENTS_OPEN';
export const DIALOG_INGREDIENTS_CLOSE = 'DialogIngredientsAdd/DIALOG_INGREDIENTS_CLOSE';
export const DIALOG_INGREDIENTS_SUBMIT = 'DialogIngredientsAdd/DIALOG_INGREDIENTS_SUBMIT';
export const DIALOG_INGREDIENTS_SUBMIT_SUCCESS = 'DialogIngredientsAdd/DIALOG_INGREDIENTS_SUBMIT_SUCCESS';
export const DIALOG_INGREDIENTS_SUBMIT_ERROR = 'DialogIngredientsAdd/DIALOG_INGREDIENTS_SUBMIT_ERROR';

function openDialog() {
  return { type : DIALOG_INGREDIENTS_OPEN };
}

function closeDialog() {
  return { type : DIALOG_INGREDIENTS_CLOSE };
}

function submitAddIngredients(ingredients) {
  return { type : DIALOG_INGREDIENTS_SUBMIT, payload : { ingredients } };
}

function responseSuccess() {
  return { type : DIALOG_INGREDIENTS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_INGREDIENTS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitAddIngredients, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitAddIngredients, responseError, responseSuccess };
