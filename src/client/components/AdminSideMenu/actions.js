/*
* AdminSideMenu Actions
*
* This contains all the text for the AdminSideMenu component.
*/
import { bindActionCreators } from 'redux';

export const CHECK_MENU_ITEM = 'AdminSideMenu/CHECK_MENU_ITEM';
export const GET_MENU_ITEM_BY_MODE = 'AdminSideMenu/GET_MENU_ITEM_BY_MODE';
export const SET_MENU_ITEM_BY_MODE = 'AdminSideMenu/SET_MENU_ITEM_BY_MODE ';

function getItemsByMode() {
  return { type : GET_MENU_ITEM_BY_MODE };
}

function setItemsByMode(items) {
  return { type : SET_MENU_ITEM_BY_MODE, payload : { items } };
}

function checkNewMenuItem(item) {
  // console.log('AdminSideMenu | actions | checkNewMenuItem | name, farm ', name, farmId);
  return { type : CHECK_MENU_ITEM, payload : { item } };
}

function containerActions(dispatch) {
  return bindActionCreators({ checkNewMenuItem, getItemsByMode, setItemsByMode }, dispatch);
}

export { containerActions, checkNewMenuItem, getItemsByMode, setItemsByMode };
