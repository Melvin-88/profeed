/*
* TableRationGroups Actions
*
* This contains all the text for the TableRationGroups component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import { actions as dialogAddActions } from 'client/components/dialogs/rationgroups/DialogRationGroupsAdd';
import { actions as dialogEditActions } from 'client/components/dialogs/rationgroups/DialogRationGroupsEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/rationgroups/DialogRationGroupsRemove';
import * as actions from './actions.js';

import serverApi from 'api';

function* getGroups(action) {
  const { payload } = action;

  // console.log(action);

  try {
    const res = yield call(serverApi.getGroups, payload.farmId);

    yield put(actions.setGroups(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* addTableRationGroupsDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* editTableRationGroupsDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.group));
}

function* removeTableRationGroupsDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.group));
}

export default function* mainSaga() {
  yield takeEvery(actions.TABLE_RATION_GROUPS_GET_GROUPS, getGroups);
  yield takeEvery(actions.TABLE_RATION_GROUPS_SHOW_ADD_DIALOG, addTableRationGroupsDialogShow);
  yield takeEvery(actions.TABLE_RATION_GROUPS_SHOW_EDIT_DIALOG, editTableRationGroupsDialogShow);
  yield takeEvery(actions.TABLE_RATION_GROUPS_SHOW_REMOVE_DIALOG, removeTableRationGroupsDialogShow);
}
