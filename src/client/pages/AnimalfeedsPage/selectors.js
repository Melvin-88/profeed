/*
* AnimalfeedsPage Selectors
*
* This contains all the text for the AnimalfeedsPage component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  permission : state => state.app.permissions.find((item) => item.name === 'animalfeed' && item.label === 'manager'),
  animalfeeds: state => state.animalfeedsPage.animalfeeds,
  farmId : state => getFarmId(state)
});
