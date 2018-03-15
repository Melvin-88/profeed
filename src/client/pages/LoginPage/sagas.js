/**
 * Created by DzEN on 01.02.2017.
 */

import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions.js';
import { actions as actionsRegisterLang } from 'client/components/dialogs/languageSelect/DialogCheckLanguage';
import serverApi from 'api';

function* userLogin(action) {
  // console.log('LoginPage | sagas | *userLogin | action ', action);
  const data = action.payload;

  // console.log('LoginPage | sagas | *userLogin | data ', data);
  let result;

  try {
    result = yield call(serverApi.signIn, data);

    // console.log('LoginPage | sagas | *userLogin | result ', result);
    if (result) {
      // console.log('LoginPage | sagas | *userLogin | result true ', result);
      yield put(actions.success(result));
    } else {
      // console.log('LoginPage | sagas | *userLogin | result false ', result);
      yield put(actions.failed(result));
    }
  } catch (e) {
    // console.log('LoginPage | sagas | *userLogin | error ', e);
    yield put(actions.failed(e));
  }
}

function* showLanguagesDialog() {
  yield put(actionsRegisterLang.openDialog());
}

// main saga
export default function* mainSaga() {
  yield takeEvery(actions.LOGIN_START, userLogin);
  yield takeEvery(actions.LOGIN_SHOW_LANGUAGES_DIALOG, showLanguagesDialog);
}
