/*
* UserGroupsPage Actions
*
* This contains all the text for the UserGroupsPage component.
*/
import { takeEvery, put, call, select } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { actions as dialogAddActions } from 'client/components/dialogs/usergroups/DialogUserGroupsAdd';
import { actions as dialogEditActions } from 'client/components/dialogs/usergroups/DialogUserGroupsEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/usergroups/DialogUserGroupsRemove';
import { actions as dialogEditPermissionsActions } from
  'client/components/dialogs/usergroups/DialogUserGroupsEditPermissions';
import { getFarmId } from 'helpers/selectorsHelper';
import serverApi from 'api';

function* getUserGroups() {
  try {
    const res = yield call(serverApi.getUserGroups);

    yield put(actions.setUserGroups(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* getGroupsSettings() {
  try {
    const res = yield call(serverApi.getUserGroupSettings);

    yield put(actions.setGroupsSettings(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* addUserGroupsDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* editUserGroupsDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.usergroups));
}

function* removeUserGroupsDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.usergroups));
}

function* editPermissionsUserGroupsDialogShow(action) {
  yield put(dialogEditPermissionsActions.openDialog(action.payload.usergroup));
}

function* updateUserGroups() {
  const state = yield select();
  const data = {
    payload : {
      farmId : getFarmId(state)
    }
  };

  yield getUserGroups(data);
}

export default function* mainSaga() {
  yield takeEvery(actions.USER_GROUPS_PAGE_GET, getUserGroups);
  yield takeEvery(actions.USER_GROUPS_PAGE_GET_GROUPS_SETTINGS, getGroupsSettings);
  yield takeEvery(actions.USER_GROUPS_PAGE_CALL_SHOW_ADD_DIALOG, addUserGroupsDialogShow);
  yield takeEvery(actions.USER_GROUPS_PAGE_CALL_SHOW_EDIT_DIALOG, editUserGroupsDialogShow);
  yield takeEvery(actions.USER_GROUPS_PAGE_CALL_SHOW_REMOVE_DIALOG, removeUserGroupsDialogShow);
  yield takeEvery(actions.USER_GROUPS_PAGE_CALL_SHOW_EDIT_PERMISSION_DIALOG, editPermissionsUserGroupsDialogShow);
  yield takeEvery(dialogAddActions.DIALOG_USER_GROUPS_SUBMIT_SUCCESS, updateUserGroups);
  yield takeEvery(dialogEditActions.DIALOG_USER_GROUPS_SUBMIT_SUCCESS, updateUserGroups);
  yield takeEvery(dialogRemoveActions.DIALOG_USER_GROUPS_SUBMIT_SUCCESS, updateUserGroups);
  yield takeEvery(dialogEditPermissionsActions.DIALOG_USER_GROUPS_SUBMIT_SUCCESS, updateUserGroups);
}
