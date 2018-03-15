/*
* AdminSideMenu Actions
*
* This contains all the text for the AdminSideMenu component.
*/
import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './actions';
import { actions as appActions } from 'client/pages/App';
import config from 'config';
import { urlMakerFromTemplate } from 'helpers/urlsPrepare';

function* makeRouting(action) {
  const { item } = action.payload;
  const rawUrl = config.URLS[item.name.toUpperCase()];

  if (!rawUrl) return;

  const path = urlMakerFromTemplate(rawUrl, {});

  // console.log('AdminSideMenu | sagas | *makeRouting | action, path ', action, path);

  yield put(push(`/${path}`));
}

function* getItemsByMode() {

}
// main saga
export default function* mainSaga() {
  yield takeEvery(actions.CHECK_MENU_ITEM, makeRouting);
  yield takeEvery(actions.GET_MENU_ITEM_BY_MODE, getItemsByMode);
  yield takeEvery(appActions.CHANGE_MODE, getItemsByMode);
}
