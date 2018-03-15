/**
 * Created by DzEN on 30.01.2017.
 */
import { bindActionCreators } from 'redux';

export const LOG_OUT = 'App/LOG_OUT';
export const CHECK_AUTH = 'App/CHECK_AUTH';
export const CHECK_MODE = 'App/CHECK_MODE';
export const CHANGE_MODE = 'App/CHANGE_MODE';
export const CHECK_PERMISSIONS = 'App/CHECK_PERMISSIONS';
export const SET_PERMISSIONS = 'App/SET_PERMISSIONS';
export const SET_USER = 'App/SET_USER';

function logout() {
  return { type : LOG_OUT };
}

function checkUser() {
  // console.log('App | actions | checkUser');
  return { type: CHECK_AUTH };
}

function checkMode() {
  return { type : CHECK_MODE };
}
/**
 *
 * @param mode
 * @return {{type: string, payload: {mode: *}}}
 */
function changeMode(mode) {
  return { type : CHANGE_MODE, payload : { mode } };
}
/**
 *
 * @param permissions
 * @return {{type: string, payload: {permissions: *}}}
 */
function setPermissions(permissions) {
  return { type : SET_PERMISSIONS, payload : { permissions } };
}
/**
 *
 * @param user
 * @return {{type: string, payload: {user: *}}}
 */
function setUser(user) {
  return { type : SET_USER, payload : { user } };
}
/**
 *
 * @return {{type: string}}
 */
function checkPermissions() {
  return { type : CHECK_PERMISSIONS };
}

function containerActions(dispatch) {
  return bindActionCreators({ logout, checkUser, changeMode, checkMode, setPermissions, setUser, checkPermissions }, dispatch);
}

export { containerActions, logout, checkUser, changeMode, checkMode, setPermissions, setUser, checkPermissions };
