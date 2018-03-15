/*
* UserGroups Actions
*
* This contains all the text for the UserGroups component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitAddUserGroup(action) {
  const { group } = action.payload;

  const data = { ...group };

  data.settings = data.settings.map((item) => ({ ...item, view : false, add : false, change : false, delete : false }));

  try {
    yield call(serverApi.addUserGroup, data);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogUserGroupAdd | error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_USER_GROUPS_SUBMIT, submitAddUserGroup);
}
