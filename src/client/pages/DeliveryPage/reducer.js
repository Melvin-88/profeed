/*
* DeliveryPage Reducer
*
* This contains all the text for the DeliveryPage component.
*/
import * as actions from './actions.js';

const initialState = {
  delivers : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.DELIVERS_SET) {
    return { ...state, delivers : payload.delivers  };
  }

  return state;
}
