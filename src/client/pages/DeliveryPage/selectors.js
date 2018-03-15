/*
* DeliveryPage Selectors
*
* This contains all the text for the DeliveryPage component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  permission : state => {
    return state.app.permissions.find((item) => item.label === 'manager' && item.name === 'delivery');
  },
  delivers: state => state.deliveryPage.delivers,
  farmId : state => getFarmId(state),
  ingredients: state => state.ingredientsPage.ingredients.filter(item => !item.is_animalfeed)
});
