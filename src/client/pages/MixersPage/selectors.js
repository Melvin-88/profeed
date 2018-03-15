/*
* MixersPage Selectors
*
* This contains all the text for the MixersPage component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  permission : state => {
    return state.app.permissions.find((item) => item.label === 'manager' && item.name === 'mixer');
  },
  mixers: state => state.mixersPage.mixers,
  farms : state => state.mixersPage.farms
});
