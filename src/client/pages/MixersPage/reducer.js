/*
* MixersPage Reducer
*
* This contains all the text for the MixersPage component.
*/
import * as actions from './actions.js';
import { mapMixer } from 'helpers/mappers';

const initialState = {
  mixers : [],
  farms : []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.MIXERS_PAGE_SET) {
    const mappedMixers = (payload.mixers || []).map((item) => mapMixer(item));

    return { ...state, mixers : mappedMixers };
  }

  if (type === actions.MIXERS_PAGE_SET_FARMS) {
    return Object.assign({}, state, {
      farms : [ ...payload.farms ]
    });
  }

  return state;
}
