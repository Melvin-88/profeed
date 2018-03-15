/*
* Lang Actions
*
* This contains all the text for the Lang component.
*/
import { takeEvery, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import cookie from 'react-cookie';
import { LANGUAGES } from 'helpers/constants';

function* setLocale(action) {
  const language = action.payload.language;

  cookie.save('language', language, { path: '/' });
}

function* checkLocale() {
  const cookieLang = cookie.load('language');
  const availableLankKeys = LANGUAGES.map(item => item.key);

  // Check if have saved lang
  if (cookieLang) {
    const existedLang = availableLankKeys.includes(cookieLang);

    if (existedLang) {
      yield put(actions.setLocale(cookieLang));
      return;
    }
  }

  // Check from browser langs
  const languages = window.navigator.languages.map(item => item.split('-')[0]); // split for this case : 'en-US'
  // for browser default language

  languages.unshift((window.navigator.language && window.navigator.language.split('-')[0]) || '');

  const browserLang = languages.find(item => availableLankKeys.includes(item));

  if (browserLang) yield put(actions.setLocale(browserLang));
}

export default function* mainSaga() {
  yield takeEvery(actions.SET_LOCALE, setLocale);
  yield takeEvery(actions.CHECK_LOCALE, checkLocale);
}
