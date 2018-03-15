/*
* Ingredients Actions
*
* This contains all the text for the Ingredients component.
*/
import { bindActionCreators } from 'redux';
export const DIALOG_INGREDIENTS_OPEN = 'DialogIngredientsEdit/DIALOG_INGREDIENTS_OPEN';
export const DIALOG_INGREDIENTS_CLOSE = 'DialogIngredientsEdit/DIALOG_INGREDIENTS_CLOSE';
export const DIALOG_INGREDIENTS_SUBMIT = 'DialogIngredientsEdit/DIALOG_INGREDIENTS_SUBMIT';
export const DIALOG_INGREDIENTS_SUBMIT_SUCCESS = 'DialogIngredientsEdit/DIALOG_INGREDIENTS_SUBMIT_SUCCESS';
export const DIALOG_INGREDIENTS_SUBMIT_ERROR = 'DialogIngredientsEdit/DIALOG_INGREDIENTS_SUBMIT_ERROR';

function openDialog(ingredient) {
  return { type : DIALOG_INGREDIENTS_OPEN, payload : { ingredient } };
}

function closeDialog() {
  return { type : DIALOG_INGREDIENTS_CLOSE };
}

function submitEditIngredients(ingredients) {
  return { type : DIALOG_INGREDIENTS_SUBMIT, payload : { ingredients } };
}

function responseSuccess() {
  return { type : DIALOG_INGREDIENTS_SUBMIT_SUCCESS };
}

function responseError(errorMessage) {
  return { type : DIALOG_INGREDIENTS_SUBMIT_ERROR, payload : { errorMessage } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitEditIngredients, responseError, responseSuccess }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitEditIngredients, responseError, responseSuccess };
