/*
* UserGroups Actions
*
* This contains all the text for the UserGroups component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitRemoveUserGroups(action) {
  const { group } = action.payload;

  try {
    yield call(serverApi.removeUserGroups, group);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogUserGroupRemove | error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_USER_GROUPS_SUBMIT, submitRemoveUserGroups);
}
