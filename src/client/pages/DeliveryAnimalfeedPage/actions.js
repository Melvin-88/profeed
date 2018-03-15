/*
* DeliveryAnimalfeedPage Actions
*
* This contains all the text for the DeliveryAnimalfeedPage component.
*/
import { bindActionCreators } from 'redux';
export const DELIVERY_ANIMALFEED_PAGE_GET = 'DeliveryAnimalfeedPage/DELIVERY_ANIMALFEED_PAGE_GET';
export const DELIVERY_ANIMALFEED_PAGE_SET = 'DeliveryAnimalfeedPage/DELIVERY_ANIMALFEED_PAGE_SET';
export const DELIVERY_ANIMALFEED_PAGE_CALL_SHOW_ADD_DIALOG =
  'DeliveryAnimalfeedPage/DELIVERY_ANIMALFEED_PAGE_CALL_SHOW_ADD_DIALOG';
export const DELIVERY_ANIMALFEED_PAGE_CALL_SHOW_EDIT_DIALOG =
  'DeliveryAnimalfeedPage/DELIVERY_ANIMALFEED_PAGE_CALL_SHOW_EDIT_DIALOG';
export const DELIVERY_ANIMALFEED_PAGE_CALL_SHOW_REMOVE_DIALOG =
  'DeliveryAnimalfeedPage/DELIVERY_ANIMALFEED_PAGE_CALL_SHOW_REMOVE_DIALOG';
import { actions as ingActions } from 'client/pages/IngredientsPage';

function getDeliveryAnimalfeed(farmId) {
  return { type : DELIVERY_ANIMALFEED_PAGE_GET, payload : { farmId } };
}
function getIngredients(farmId) {
  return ingActions.getIngredients(farmId);
}

function setDeliveryAnimalfeed(deliveryanimalfeed) {
  return { type :DELIVERY_ANIMALFEED_PAGE_SET, payload : { deliveryanimalfeed } };
}

function showDeliveryAnimalfeedAddDialog() {
  return { type : DELIVERY_ANIMALFEED_PAGE_CALL_SHOW_ADD_DIALOG };
}

function showDeliveryAnimalfeedEditDialog(deliveryanimalfeed) {
  return { type : DELIVERY_ANIMALFEED_PAGE_CALL_SHOW_EDIT_DIALOG, payload : { deliveryanimalfeed } };
}

function showDeliveryAnimalfeedRemoveDialog(deliveryanimalfeed) {
  return { type : DELIVERY_ANIMALFEED_PAGE_CALL_SHOW_REMOVE_DIALOG, payload : { deliveryanimalfeed } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getDeliveryAnimalfeed, setDeliveryAnimalfeed, showDeliveryAnimalfeedAddDialog,
    showDeliveryAnimalfeedEditDialog, showDeliveryAnimalfeedRemoveDialog, getIngredients }, dispatch);
}

export { containerActions, getDeliveryAnimalfeed, setDeliveryAnimalfeed, showDeliveryAnimalfeedAddDialog,
    showDeliveryAnimalfeedEditDialog, showDeliveryAnimalfeedRemoveDialog };
