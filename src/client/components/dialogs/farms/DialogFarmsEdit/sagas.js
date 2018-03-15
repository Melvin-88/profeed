import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitEditFarm(action) {
  const { id, name, language, timezone } = action.payload.farm;

  const data = {
    id,
    name,
    settings: {
      language,
      timezone
    }
  };

  try {
    // console.log('DialogFarmsEdit | submitEditFarm -- data ', action);
    yield call(serverApi.editFarm, data);

    // console.log('DialogFarmsEdit | submitEditFarm result ', result);
    yield put(actions.closeDialog());
  } catch (e) {
    console.error('DialogFarmsEdit | submitAddFarm error ', e);
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_FARMS_SUBMIT, submitEditFarm);
}
