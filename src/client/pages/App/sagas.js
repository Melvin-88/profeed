/**
 * Created by DzEN on 02.02.2017.
 */
import { put, call, takeEvery } from 'redux-saga/effects';
import * as loginPageMessages from 'client/pages/LoginPage/actions';
import * as appMessages from './actions';
import { actions as headerMenuActions } from 'client/components/HeaderMenu';
import cookie from 'react-cookie';
import config from 'config';
import { MODE } from 'helpers/constants';
import { push } from 'react-router-redux';
import { USER_LEVEL_ACCESS, ADMIN_PERMISSION } from 'helpers/constants';
import serverApi from 'api';

function* userLogged(action) {
  const response = action.payload;

  // console.log('App | sagas | *userLogged | login data ', response);

  cookie.save('auth_token', response.data.auth_token, { path: '/' });
  cookie.save('access_lvl', response.data.access, { path: '/' });
  yield put(push(`/${config.URLS.FARMS}`));
}

function* logOut() {
  // console.log('App | sagas | *logOut | ', cookie.load('auth_token'));

  cookie.remove('auth_token', { path : '/' });
  cookie.remove('access_lvl', { path : '/' });
  yield put(push(`/${config.URLS.LOGIN}`));
}

function* checkAuth() {
  /* const token = cookie.load('auth_token');

  // Check if user has token
  // console.log('App | sagas | *checkAuth | token ', token);
  if (!token || Object.keys(token).length < 1) {
    yield put(appMessages.logout());
  }

  yield checkPermissions();*/
}

function* checkPermissions() {
  const userAccessLvl = cookie.load('access_lvl');

  // Check if user has right access
  if (!Number.isInteger(+userAccessLvl) || !userAccessLvl) {
    yield put(appMessages.logout());
    return;
  }
  let meFunc = null;

  // get permissions
  if (+userAccessLvl === USER_LEVEL_ACCESS.EMPLOYEE) { // employee level
    try {
      const result = yield call(serverApi.getEmployeePermissions);

      yield put(appMessages.setPermissions(result.data.permissions));
    } catch (e) {
      console.error('App | saga | perm request error ', e);
      yield put(appMessages.logout());
      return;
    }
    // In this block also can set getMe function
    meFunc = serverApi.getEmployeeMe;
  } else {
    yield put(appMessages.setPermissions(ADMIN_PERMISSION));
    // In this block also can set getMe function
    meFunc = serverApi.getUserMe;
  }

  // Get user info
  try {
    const result = yield call(meFunc);
    const user = { ...result.data, type : +userAccessLvl };

    yield put(appMessages.setUser(user));
  } catch (e) {
    console.error('App | saga | perm request error ', e);
    yield put(appMessages.logout());
  }
}

function* changeMode(action) {
  const { payload } = action;

  let url = '';

  if (payload.mode === MODE.COMMON) {
    url = config.URLS.FARMS;
  } else if (payload.mode === MODE.ADMIN) {
    url = config.URLS.MIXERS;
  }

  yield put(appMessages.changeMode(payload.mode));
  yield put(push(`/${url}`));
}

export default function* mainSaga() {
  yield takeEvery(loginPageMessages.LOGIN_SUCCESS, userLogged);
  yield takeEvery(appMessages.CHECK_AUTH, checkAuth);
  yield takeEvery(appMessages.LOG_OUT, logOut);
  yield takeEvery(headerMenuActions.LOG_OUT, logOut);
  yield takeEvery(headerMenuActions.CHANGE_MODE, changeMode);
  yield takeEvery(appMessages.CHECK_PERMISSIONS, checkPermissions);
}
