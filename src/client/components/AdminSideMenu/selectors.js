/*
* AdminSideMenu Selectors
*
* This contains all the text for the AdminSideMenu component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';
import config from 'config';
import { MODE } from 'helpers/constants';


function selectActiveItem(menuItems, name) {
  return menuItems.map((item) => {
    const newItem = item;

    if (newItem.name === name) {
      newItem.active = true;
      console.log('Checked : ', newItem);
    } else {
      newItem.active = false;
    }

    return newItem;
  });
}

function lockItems(menuItems, name) {
  // Find 'active' item
  const disabler = menuItems.find((item) => {
    return item.name === name;
  });

  // If active item can disable (has property)
  if (disabler && disabler.disable) {
    // return new array with locked item
    return menuItems.map((item) => {
      const newItem = item;

      // Locked all, that in 'disable' array
      if (disabler.name !== newItem.name && disabler.disable.indexOf(newItem.name) > -1) {
        newItem.locked = true;
      } else {
        // Else, make unlocked
        newItem.locked = false;
      }

      return newItem;
    });
  }

  return menuItems.map((item) => {
    const newItem = item;

    newItem.locked = false;

    return newItem;
  });
}

export const modelSelector = createStructuredSelector({
  menuItems: state => {
    console.log('AdminSideMenu | selectors | state ', state);
    const { permissions } = state.app;
    const items = state.sideMenu.menuItems
      .filter((item) => item.mode === MODE.ADMIN)
      .filter((item) => {
        const linkedItemsAndPermissions = config.PERMISSIONS_AND_MENU_ITEMS;
        const result = linkedItemsAndPermissions[item.name];
        const keys = result.split('.');
        const permission = permissions.find((perm) => perm.label === keys[0] && perm.name === keys[1]);

        return permission && permission[keys[2]];
      });

    console.log('AdminSideMenu | selectors | items  after ', items);
    const active = (path => path.split('/')[2])(state.routing.locationBeforeTransitions.pathname);

    return lockItems(selectActiveItem(items, active), active);
  },
  farmId : state => getFarmId(state)
});
