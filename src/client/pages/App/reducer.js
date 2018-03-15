/**
 * Created by DzEN on 30.01.2017.
 */
import * as actions from './actions';
import { actions as headerActions } from 'client/components/HeaderMenu';
import { MODE } from 'helpers/constants';

const initialState = {
  user : {},
  mode : MODE.COMMON,
  permissions : []
};

function reducer(state = initialState, action) {
  // console.log('App | reducer | action ', action);
  const { type, payload } = action;

  if (type === actions.LOG_OUT || type === headerActions.LOG_OUT) {
    console.log('App | reducer | action ', action);
    return { ...initialState };
  }

  if (type === actions.CHANGE_MODE) {
    return { ...state, mode : payload.mode || MODE.COMMON };
  }

  if (type === actions.CHECK_MODE) {
    const partsOfPath = location.pathname.split('/');

    if (partsOfPath[1] === 'farms') return { ...state, mode : MODE.COMMON };
    if (partsOfPath[1] === 'admin') return { ...state, mode : MODE.ADMIN };
  }

  if (type === actions.SET_PERMISSIONS) {
    const { permissions } = payload;

    return { ...state, permissions };
  }

  if (type === actions.SET_USER) {
    const { user } = payload;

    return { ...state, user };
  }

  return state;
}

export default reducer;
