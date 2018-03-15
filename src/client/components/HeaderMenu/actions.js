/*
* HeaderMenuExt Actions
*
* This contains all the text for the HeaderMenuExt component.
*/
import { bindActionCreators } from 'redux';

export const LOG_OUT = 'HeaderMenu/LOG_OUT';
export const CHANGE_MODE = 'HeaderMenu/CHANGE_MODE';

function logOut() {
  return { type : LOG_OUT };
}

function changeMode(mode) {
  return { type : CHANGE_MODE, payload : { mode } };
}

function containerActions(dispatch) {
  return bindActionCreators({ logOut, changeMode }, dispatch);
}

export { containerActions, logOut, changeMode };
