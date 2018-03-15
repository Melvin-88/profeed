/*
* FarmsPage Selectors
*
* This contains all the text for the FarmsPage component.
*/

import { createStructuredSelector } from 'reselect';
import { MODE } from 'helpers/constants';
import config from 'config';

export const modelSelector = createStructuredSelector({
  permission : state => state.app.permissions.find((item) => item.name === 'farm' && item.label === 'manager'),
  startUrl : state => {
    const { permissions } = state.app;
    const items = state.sideMenu.menuItems
      .filter((item) => item.mode === MODE.COMMON)
      .filter((item) => {
        if (item.name === 'farms') return;

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

    return items[0] ? items[0] : state.sideMenu.menuItems[0]; // By default it is will be a 'farms';
  },
  farms: state => {
    // console.log('FarmsPage | selectors | state ', state);
    return state.farmsPage.farms;
  }
});
