/*
 * SideMenu Reducer
 *
 * This contains all the text for the SideMenu component.
 */
import config from 'config';

const initialState = {
  menuItems: [ ...config.MENU_ITEMS ],
  active : null
};

export default function (state = initialState) { // , action = {}
  return state;
}
