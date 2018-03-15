/*
* DeliveryAnimalfeedPage Selectors
*
* This contains all the text for the DeliveryAnimalfeedPage component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  permission : state => state.app.permissions.find((item) => item.name === 'animalfeeddelivery' && item.label === 'manager'),
  deliveryanimalfeed: state => state.deliveryanimalfeedPage.deliveryanimalfeed,
  ingredients: state => state.ingredientsPage.ingredients.filter(item => item.is_animalfeed),
  farmId : state => getFarmId(state)
});
