/*
* RegisterPage Actions
*
* This contains all the text for the RegisterPage component.
*/
import { bindActionCreators } from 'redux';
export const REGISTER_START = 'RegisterPage/REGISTER_START';
export const REGISTER_SUCCESS = 'RegisterPage/REGISTER_SUCCESS';
export const REGISTER_ERROR = 'RegisterPage/REGISTER_ERROR';
export const REGISTER_SHOW_LANGUAGES_DIALOG = 'RegisterPage/REGISTER_SHOW_LANGUAGES_DIALOG';

function success(data) {
  return { type: REGISTER_SUCCESS, payload: data };
}
function failed(error) {
  return { type: REGISTER_ERROR, payload: error };
}

function submit(data) {
  return { type : REGISTER_START, payload : data };
}

function showLanguagesDialog() {
  return { type : REGISTER_SHOW_LANGUAGES_DIALOG };
}

function containerActions(dispatch) {
  return bindActionCreators({ submit, success, failed, showLanguagesDialog }, dispatch);
}

export { containerActions, submit, success, failed, showLanguagesDialog };
