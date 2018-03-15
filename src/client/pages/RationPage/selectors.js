/*
* RationPage Selectors
*
* This contains all the text for the RationPage component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  permission : state => {
    return state.app.permissions.find((item) => item.label === 'schedule' && item.name === 'ration');
  },
  ration: state => state.rationPage.ration,
  rationId : (state, ownProps) => ownProps.params.rationId,
  farmId : state => getFarmId(state)
});
