/**
 * Created by DzEN on 30.01.2017.
 */
import * as actions from './actions.js';

const initialState = {
  loginStart : false,
  loginSuccess : false,
  loginError : false
};

export default function (state = initialState, action = {}) {
  const { type } = action;

  // console.log('LoginPage | redux | state ', state);
  if (type === actions.LOGIN_START) {
    return Object.assign({}, state, {
      loginStart : true,
      loginSuccess : false,
      loginError : false
    });
  }

  if (type === actions.LOGIN_SUCCESS) {
    return Object.assign({}, state, {
      loginStart : false,
      loginSuccess : true,
      loginError : false
    });
  }

  if (type === actions.LOGIN_ERROR) {
    return Object.assign({}, state, {
      loginStart : false,
      loginSuccess : false,
      loginError : true
    });
  }

  return state;
}
