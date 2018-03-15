/*
* Register Actions
*
* This contains all the text for the Register component.
*/
import { takeEvery, put } from 'redux-saga/effects';
import * as actions from './actions';
import { actions as langActions } from 'client/containers/LanguageProvider';

function* checkNewLanguage(action) {
  const { language } = action.payload;

  yield put(langActions.setLocale(language));
  yield put(actions.closeDialog());
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_LANG_CHECKED, checkNewLanguage);
}
