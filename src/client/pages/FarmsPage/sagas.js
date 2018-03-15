/*
* FarmsPage Actions
*
* This contains all the text for the FarmsPage component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import { push } from 'react-router-redux';
import * as actions from './actions.js';
import { actions as dialogAddActions } from 'client/components/dialogs/farms/DialogFarmsAdd';
import { actions as dialogEditActions } from 'client/components/dialogs/farms/DialogFarmsEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/farms/DialogFarmsRemove';
import serverApi from 'api';
import { errorMessages } from 'errors';
import { urlMakerFromTemplate } from 'helpers/urlsPrepare';

function* getFarms(action) {
  // console.log('FarmsPage | sagas | *getFarms | action ', action);
  const { payload } = action;

  try {
    const res = yield call(serverApi.getFarms, payload.page);

    // console.log('FarmsPage | sagas | *getFarms | res ', res);
    yield put(actions.setFarms(res.data));
  } catch (e) {
    // console.log('FarmsPage | sagas | *getFarms | error ', e.message);
    if (e.message === errorMessages.UNAUTHORIZED) {
      push('/login');
    }
  }
}

function* updateFarms() {
  yield put(actions.getFarms());
}

function* addFarmDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* editFarmDialogShow(action) {
  const { payload } = action;

  // console.log('FarmsPage | actions | editFarmDialogShow | payload ', payload.farm);
  yield put(dialogEditActions.openDialog(payload.farm));
}

function* removeFarmDialogShow(action) {
  // console.log('FarmsPage | sagas | *removeFarmDialogShow | action ', action);
  yield put(dialogRemoveActions.openDialog(action.payload.farm));
}

function* goToFarm(action) {
  const { farm, urlTemplate } = action.payload;
  const url = urlMakerFromTemplate(urlTemplate, { farmId : farm.id });

  yield put(push(`/${url || ''}`));
}

export default function* mainSaga() {
  yield takeEvery(actions.FARMS_GET, getFarms);
  yield takeEvery(actions.FARMS_CALL_SHOW_ADD_DIALOG, addFarmDialogShow);
  yield takeEvery(dialogAddActions.DIALOG_FARMS_SUBMIT_SUCCESS, updateFarms);
  yield takeEvery(actions.FARMS_CALL_SHOW_EDIT_DIALOG, editFarmDialogShow);
  yield takeEvery(dialogEditActions.DIALOG_FARMS_SUBMIT_SUCCESS, updateFarms);
  yield takeEvery(actions.FARMS_CALL_SHOW_REMOVE_DIALOG, removeFarmDialogShow);
  yield takeEvery(dialogRemoveActions.DIALOG_FARMS_SUBMIT_SUCCESS, updateFarms);
  yield takeEvery(actions.FARMS_GO_TO_FARM, goToFarm);
}
