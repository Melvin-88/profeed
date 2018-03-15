/*
* TableRationIngredients Actions
*
* This contains all the text for the TableRationIngredients component.
*/
import { bindActionCreators } from 'redux';
const prefixConst = 'TableScheduleRationIngredients';

export const TABLE_SCHEDULE_INGREDIENT_PROPERTY_EDITED = `${prefixConst}/TABLE_SCHEDULE_INGREDIENT_PROPERTY_EDITED`;

function saveEditedProperty(targetId, propertyName, value) {
  return { type : TABLE_SCHEDULE_INGREDIENT_PROPERTY_EDITED, payload : { targetId, propertyName, value } };
}

function containerActions(dispatch) {
  return bindActionCreators({ saveEditedProperty }, dispatch);
}

export { saveEditedProperty, containerActions };
