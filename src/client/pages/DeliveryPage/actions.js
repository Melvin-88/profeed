/*
* DeliveryPage Actions
*
* This contains all the text for the DeliveryPage component.
*/
import { bindActionCreators } from 'redux';

export const DELIVERS_GET = 'DeliversPage/DELIVERS_GET';
export const DELIVERS_SET = 'DeliversPage/DELIVERS_SET';
export const DELIVERS_CALL_SHOW_ADD_DIALOG = 'DeliversPage/DELIVERS_CALL_SHOW_ADD_DIALOG';
export const DELIVERS_CALL_SHOW_EDIT_DIALOG = 'DeliversPage/DELIVERS_CALL_SHOW_EDIT_DIALOG';
export const DELIVERS_CALL_SHOW_REMOVE_DIALOG = 'DeliversPage/DELIVERS_CALL_SHOW_REMOVE_DIALOG';

import { actions as ingActions } from 'client/pages/IngredientsPage';

function getDelivers(farmId) {
  return { type : DELIVERS_GET, payload : { farmId } };
}

function getIngredients(farmId) {
  return ingActions.getIngredients(farmId);
}

function setDelivers(delivers) {
  return { type : DELIVERS_SET, payload : { delivers } };
}

function showDeliveryAddDialog() {
  return { type : DELIVERS_CALL_SHOW_ADD_DIALOG };
}

function showDeliveryEditDialog(delivery) {
  return { type : DELIVERS_CALL_SHOW_EDIT_DIALOG, payload : { delivery } };
}

function showDeliveryRemoveDialog(delivery) {
  return { type : DELIVERS_CALL_SHOW_REMOVE_DIALOG, payload : { delivery } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getIngredients,
    getDelivers,
    setDelivers,
    showDeliveryAddDialog,
    showDeliveryEditDialog,
    showDeliveryRemoveDialog
  }, dispatch);
}

export { containerActions,
  getIngredients,
  getDelivers,
  setDelivers,
  showDeliveryAddDialog,
  showDeliveryEditDialog,
  showDeliveryRemoveDialog
};
