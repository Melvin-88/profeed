/*
* UserGroups Actions
*
* This contains all the text for the UserGroups component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitEditUserGroups(action) {
  const { group } = action.payload;

  const data = { ...group };
  const id = group.id;

  delete group.id;

  data.settings = data.settings.map((item) => {
    if (Object.is(item.view, undefined)) return { ...item, view : false, add : false, change : false, delete : false };

    return item;
  });

  try {
    yield call(serverApi.editUserGroup, data, id);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogUserGroupEdit | error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_USER_GROUPS_SUBMIT, submitEditUserGroups);
}
