/*
* DialogGroupsRemove Actions
*
* This contains all the text for the DialogGroupsAdd component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitRemoveGroup(action) {
  const { group } = action.payload;

  // console.log('DialogGroupsRemove | submitRemoveFarm groups ', group);
  try {
    yield call(serverApi.removeGroup, group);

    // console.log('DialogGroupsRemove | submitRemoveFarm result ', result);

    yield put(actions.closeDialog());
  } catch (e) {
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_GROUPS_SUBMIT, submitRemoveGroup);
}
