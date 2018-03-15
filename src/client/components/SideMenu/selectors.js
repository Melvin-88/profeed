/*
* SideMenu Selectors
*
* This contains all the text for the SideMenu component.
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
    console.log('SideMenu | selectors | state ', state);
    const { permissions } = state.app;
    const items = state.sideMenu.menuItems
      .filter((item) => item.mode === MODE.COMMON)
      .filter((item) => {
        const linkedItemsAndPermissions = config.PERMISSIONS_AND_MENU_ITEMS;
        const result = linkedItemsAndPermissions[item.name];

        if (!result) {
          return false;
        }

        // Special hack for history
        if (item.name === 'history') {
          return !!result.find(itemR => {
            const keys = itemR.split('.');
            const permission = permissions.find((perm) => perm.label === keys[0] && perm.name === keys[1]);

            return permission && permission[keys[2]];
          });
        }

        const keys = result.split('.');
        const permission = permissions.find((perm) => perm.label === keys[0] && perm.name === keys[1]);

        return permission && permission[keys[2]];
      });

    console.log('SideMenu | selectors | items  after ', items);
    const active = (path => {
      const parts = path.split('/'); // <==

      if (parts[2] === 'farms') {
        return parts[2];
      } else if (parts[3]) {
        return parts[3];
      }

      return null;
    })(state.routing.locationBeforeTransitions.pathname);

    return lockItems(selectActiveItem(items, active), active);
  },
  farmId : state => getFarmId(state)
});
