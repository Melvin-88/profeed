/*
* UserGroups Actions
*
* This contains all the text for the UserGroups component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitEditPermissionsUserGroups(action) {
  const { usergroup } = action.payload;

  const data = { ...usergroup };
  const id = usergroup.id;

  delete data.id;

  try {
    yield call(serverApi.editUserGroup, data, id);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogFarms | submitAddFarm error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_USER_GROUPS_SUBMIT, submitEditPermissionsUserGroups);
}
