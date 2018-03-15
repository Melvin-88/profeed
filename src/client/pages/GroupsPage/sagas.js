/*
* GroupPage Actions
*
* This contains all the text for the GroupPage component.
*/
import { takeEvery, put, call, select } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { actions as dialogAddActions } from 'client/components/dialogs/groups/DialogGroupsAdd';
import { actions as dialogEditActions } from 'client/components/dialogs/groups/DialogGroupsEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/groups/DialogGroupsRemove';
import { getFarmId } from 'helpers/selectorsHelper';
import serverApi from 'api';

function* getGroups(action) {
  const { payload } = action;

  // console.log('GroupsPage | sagas | getGroups | payload ', payload);
  try {
    const res = yield call(serverApi.getGroups, payload.farmId);

    yield put(actions.setGroups(res.data));
  } catch (e) {
    console.error('GroupsPage | sagas | getGroups | error ', e);
  }
}

function* addGroupDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* editGroupDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.group));
}

function* removeGroupDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.groups));
}

function* updateGroups() {
  const state = yield select();
  const data = {
    payload : {
      farmId : getFarmId(state)
    }
  };

  // console.log('GroupsPage | sagas | updateGroups | state ', state);

  yield getGroups(data);
}

export default function* mainSaga() {
  yield takeEvery(actions.GROUPS_GET, getGroups);
  yield takeEvery(actions.GROUPS_CALL_SHOW_ADD_DIALOG, addGroupDialogShow);
  yield takeEvery(actions.GROUPS_CALL_SHOW_EDIT_DIALOG, editGroupDialogShow);// GROUPS_CALL_SHOW_EDIT_DIALOG
  yield takeEvery(actions.GROUPS_CALL_SHOW_REMOVE_DIALOG, removeGroupDialogShow);
  yield takeEvery(dialogAddActions.DIALOG_GROUPS_SUBMIT_SUCCESS, updateGroups);
  yield takeEvery(dialogEditActions.DIALOG_GROUPS_SUBMIT_SUCCESS, updateGroups);
  yield takeEvery(dialogRemoveActions.DIALOG_GROUPS_SUBMIT_SUCCESS, updateGroups);
}
