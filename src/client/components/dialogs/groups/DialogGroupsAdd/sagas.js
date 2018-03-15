/*
* DialogGroupsAdd Actions
*
* This contains all the text for the DialogGroupsAdd component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitAddGroup(action) {
  const { group } = action.payload;
  console.log('GROUP', group);
  const data = {
    'farm' : group.farmId,
    'name' : group.groupName,
    'lactating' : group.lactating,
    'deleted' : false
  };

  try {
    yield call(serverApi.addNewGroup, data);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogFarms | submitAddFarm error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_GROUPS_SUBMIT, submitAddGroup);
}
