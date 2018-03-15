/*
* IngredientsPage Actions
*
* This contains all the text for the IngredientsPage component.
*/
import { bindActionCreators } from 'redux';
export const INGREDIENTS_PAGE_GET = 'IngredientsPage/INGREDIENTS_PAGE_GET';
export const INGREDIENTS_PAGE_SET = 'IngredientsPage/INGREDIENTS_PAGE_SET';
export const INGREDIENTS_PAGE_CALL_SHOW_ADD_DIALOG = 'IngredientsPage/INGREDIENTS_PAGE_CALL_SHOW_ADD_DIALOG';
export const INGREDIENTS_PAGE_CALL_SHOW_EDIT_DIALOG = 'IngredientsPage/INGREDIENTS_PAGE_CALL_SHOW_EDIT_DIALOG';
export const INGREDIENTS_PAGE_CALL_SHOW_REMOVE_DIALOG = 'IngredientsPage/INGREDIENTS_PAGE_CALL_SHOW_REMOVE_DIALOG';

function getIngredients(farmId) {
  return { type : INGREDIENTS_PAGE_GET, payload : { farmId } };
}

function setIngredients(ingredients) {
  return { type :INGREDIENTS_PAGE_SET, payload : { ingredients } };
}

function showIngredientsAddDialog() {
  return { type : INGREDIENTS_PAGE_CALL_SHOW_ADD_DIALOG };
}

function showIngredientsEditDialog(ingredients) {
  // console.log('IngredientsPage | actions | ingredients ', ingredients);
  return { type : INGREDIENTS_PAGE_CALL_SHOW_EDIT_DIALOG, payload : { ingredients } };
}

function showIngredientsRemoveDialog(ingredients) {
  return { type : INGREDIENTS_PAGE_CALL_SHOW_REMOVE_DIALOG, payload : { ingredients } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getIngredients, setIngredients, showIngredientsAddDialog,
    showIngredientsEditDialog, showIngredientsRemoveDialog }, dispatch);
}

export { containerActions, getIngredients, setIngredients, showIngredientsAddDialog,
    showIngredientsEditDialog, showIngredientsRemoveDialog };
