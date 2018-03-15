/*
* Lang Actions
*
* This contains all the text for the Lang component.
*/
import { bindActionCreators } from 'redux';

export const SET_LOCALE = 'LanguageProvider/SET_LOCALE';
export const CHECK_LOCALE = 'LanguageProvider/CHECK_LOCALE';

function setLocale(language) {
  return { type : SET_LOCALE, payload : { language } };
}

function checkAndSetLanguage() {
  return { type : CHECK_LOCALE };
}

function containerActions(dispatch) {
  return bindActionCreators({ setLocale, checkAndSetLanguage }, dispatch);
}

export { containerActions, setLocale, checkAndSetLanguage };
