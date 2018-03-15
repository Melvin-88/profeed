/*
* DeliveryAnimalfeedPage Reducer
*
* This contains all the text for the DeliveryAnimalfeedPage component.
*/
import * as actions from './actions.js';

const initialState = {
  deliveryanimalfeed : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.DELIVERY_ANIMALFEED_PAGE_SET) {
    return { ...state, deliveryanimalfeed : payload.deliveryanimalfeed };
  }

  return state;
}
