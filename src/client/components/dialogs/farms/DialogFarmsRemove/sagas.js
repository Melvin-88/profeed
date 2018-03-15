/*
* DialogFarmsRemove Actions
*
* This contains all the text for the DialogFarmsRemove component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';
// import { actions as farmsPageActions } from 'client/pages/FarmsPage';

function* submitRemoveFarm(action) {
  const { payload } = action;

  const data = {
    id : payload.farm.id
  };

  try {
    yield call(serverApi.deleteFarm, data);

    // console.log('DialogFarmsRemove | submitRemoveFarm result ', result);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogFarmsRemove | submitRemoveFarm error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_FARMS_SUBMIT, submitRemoveFarm);
}
