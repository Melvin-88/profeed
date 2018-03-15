/**
 * Created by DzEN on 30.01.2017.
 */
import { bindActionCreators } from 'redux';

export const LOGIN_START = 'LoginPage/LOGIN_START';
export const LOGIN_SUCCESS = 'LoginPage/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LoginPage/LOGIN_ERROR';
export const LOGIN_SHOW_LANGUAGES_DIALOG = 'LoginPage/LOGIN_SHOW_LANGUAGES_DIALOG';

function success(data) {
  return { type: LOGIN_SUCCESS, payload: data };
}
function failed(error) {
  return { type: LOGIN_ERROR, payload: error };
}

function login(data) {
  return { type : LOGIN_START, payload : data };
}

function showLanguagesDialog() {
  return { type : LOGIN_SHOW_LANGUAGES_DIALOG };
}

function containerActions(dispatch) {
  return bindActionCreators({ login, success, failed, showLanguagesDialog }, dispatch);
}

export { containerActions, login, success, failed, showLanguagesDialog };
