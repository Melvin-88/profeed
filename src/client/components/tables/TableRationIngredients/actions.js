/*
* TableRationIngredients Actions
*
* This contains all the text for the TableRationIngredients component.
*/
import { bindActionCreators } from 'redux';
const prefixConst = 'TableRationIngredients';

export const TABLE_RATION_INGREDIENTS_GET_INGREDIENTS = `${prefixConst}/TABLE_RATION_INGREDIENTS_GET_INGREDIENTS`;
export const TABLE_RATION_INGREDIENTS_SET_INGREDIENTS = `${prefixConst}/TABLE_RATION_INGREDIENTS_SET_INGREDIENTS`;
export const TABLE_RATION_INGREDIENTS_SHOW_ADD_DIALOG = `${prefixConst}/TABLE_RATION_INGREDIENTS_SHOW_ADD_DIALOG`;
export const TABLE_RATION_INGREDIENTS_SHOW_EDIT_DIALOG = `${prefixConst}/TABLE_RATION_INGREDIENTS_SHOW_EDIT_DIALOG`;
export const TABLE_RATION_INGREDIENTS_SHOW_REMOVE_DIALOG = `${prefixConst}/TABLE_RATION_INGREDIENTS_SHOW_REMOVE_DIALOG`;
export const TABLE_RATION_INGREDIENT_PROPERTY_EDITED = `${prefixConst}/TABLE_RATION_INGREDIENT_PROPERTY_EDITED`;

function getIngredients(farmId) {
  return { type : TABLE_RATION_INGREDIENTS_GET_INGREDIENTS, payload : { farmId } };
}

function setIngredients(ingredients) {
  return { type : TABLE_RATION_INGREDIENTS_SET_INGREDIENTS, payload : { ingredients } };
}

function showTableRationIngredientsAddDialog() {
  return { type : TABLE_RATION_INGREDIENTS_SHOW_ADD_DIALOG };
}

function showTableRationIngredientsEditDialog(ingredient) {
  return { type : TABLE_RATION_INGREDIENTS_SHOW_EDIT_DIALOG, payload : { ingredient } };
}

function showTableRationIngredientsRemoveDialog(ingredient) {
  return { type : TABLE_RATION_INGREDIENTS_SHOW_REMOVE_DIALOG, payload : { ingredient } };
}

function saveEditedProperty(targetId, propertyName, value) {
  return { type : TABLE_RATION_INGREDIENT_PROPERTY_EDITED, payload : { targetId, propertyName, value } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getIngredients, setIngredients, showTableRationIngredientsAddDialog,
    showTableRationIngredientsEditDialog, showTableRationIngredientsRemoveDialog, saveEditedProperty }, dispatch);
}

export { getIngredients, setIngredients, showTableRationIngredientsAddDialog, showTableRationIngredientsEditDialog,
  showTableRationIngredientsRemoveDialog, saveEditedProperty, containerActions };
