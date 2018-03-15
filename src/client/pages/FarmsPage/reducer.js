/*
 * FarmsPage Reducer
 *
 * This contains all the text for the FarmsPage component.
 */
import * as actions from './actions.js';

const initialState = {
  farms : []
};

export default function (state = initialState, action = {}) { // , action = {}
  const { type, payload } = action;

  // console.log('FarmsPage | reducer | action ', action);

  if (type === actions.FARMS_SET) {
    return Object.assign({}, state, {
      farms : [ ...payload.farms ]
    });
  }

  return state;
}
