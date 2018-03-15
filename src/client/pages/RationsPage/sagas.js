/*
* RationsPage Actions
*
* This contains all the text for the RationsPage component.
*/
import { takeEvery, put, call, select } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { actions as dialogRemoveActions } from 'client/components/dialogs/rations/DialogRationsRemove';
import { getFarmId } from 'helpers/selectorsHelper';
import serverApi from 'api';
import { PAGE_TYPE } from 'helpers/constants';
import { urlMakerFromTemplate } from 'helpers/urlsPrepare';
import config from 'config';
import { push } from 'react-router-redux';

function* getRations(action) {
  const { payload } = action;

  try {
    const res = yield call(serverApi.getRations, payload.farmId);

    yield put(actions.setRations(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* addRationsPageShow() {}

function* editRationsPageShow() {}

function* removeRationsDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.ration));
}

function* updateRations() {
  const state = yield select();
  const data = {
    payload : {
      farmId : getFarmId(state)
    }
  };

  yield getRations(data);
}

function* changePage(action) {
  const { type, farmId, rationId } = action.payload;
  let url = null;

  if (type === PAGE_TYPE.ADD) {
    url = urlMakerFromTemplate(config.URLS.RATION_ADD, { farmId });
  } else if (type === PAGE_TYPE.EDIT) {
    url = urlMakerFromTemplate(config.URLS.RATION_EDIT, { farmId, rationId });
  }

  if (url) {
    yield put(push(`/${url}`));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.RATIONS_PAGE_GET, getRations);
  yield takeEvery(actions.RATIONS_PAGE_CALL_SHOW_ADD_DIALOG, addRationsPageShow);
  yield takeEvery(actions.RATIONS_PAGE_CALL_SHOW_EDIT_DIALOG, editRationsPageShow);
  yield takeEvery(actions.RATIONS_PAGE_CALL_SHOW_REMOVE_DIALOG, removeRationsDialogShow);
  yield takeEvery(dialogRemoveActions.DIALOG_RATIONS_SUBMIT_SUCCESS, updateRations);
  yield takeEvery(actions.RATIONS_PAGE_GOTO, changePage);
}
