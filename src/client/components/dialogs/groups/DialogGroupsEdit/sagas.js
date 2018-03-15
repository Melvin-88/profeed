/*
* DialogGroupsEdit Actions
*
* This contains all the text for the DialogGroupsAdd component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitEditGroup(action) {
  const { group } = action.payload;

  try {
    yield call(serverApi.editGroup, group);

    // console.log('DialogGroupsEdit | submitEditGroup result ', result);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogGroupsEdit | submitEditGroup error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_GROUPS_SUBMIT, submitEditGroup);
}
