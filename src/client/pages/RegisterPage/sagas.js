/*
* RegisterPage Actions
*
* This contains all the text for the RegisterPage component.
*/
import { takeEvery, put, call } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { actions as actionsRegisterLang } from 'client/components/dialogs/languageSelect/DialogCheckLanguage';
import serverApi from 'api';

function* userRegister(action) {
  console.log('RegisterPage | sagas | *userRegister | action ', action);
  const data = action.payload;

  // console.log('LoginPage | sagas | *userRegister | data ', data);
  let result;

  try {
    result = yield call(serverApi.signUp, data);

    // console.log('LoginPage | sagas | *userRegister | result ', result);
    if (result) {
      // console.log('LoginPage | sagas | *userRegister | result true ', result);
      yield put(actions.success(result));
    } else {
      // console.log('LoginPage | sagas | *userRegister | result false ', result);
      yield put(actions.failed(result));
    }
  } catch (e) {
    // console.log('LoginPage | sagas | *userRegister | error ', e);
    yield put(actions.failed(e));
  }
}

function* showLanguagesDialog() {
  yield put(actionsRegisterLang.openDialog());
}

// main saga
export default function* mainSaga() {
  yield takeEvery(actions.REGISTER_START, userRegister);
  yield takeEvery(actions.REGISTER_SHOW_LANGUAGES_DIALOG, showLanguagesDialog);
}
