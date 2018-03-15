/*
 * SideMenu Actions
 *
 * This contains all the text for the SideMenu component.
 */
import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './actions';
import { actions as appActions } from 'client/pages/App';
import config from 'config';
import { urlMakerFromTemplate } from 'helpers/urlsPrepare';
// import { getMode } from 'helpers/selectorsHelper';
// import { MODE } from 'helpers/constants';

function* makeRouting(action) {
  const { item, farmId } = action.payload;
  const rawUrl = config.URLS[item.name.toUpperCase()];

  if (!rawUrl) return;

  const path = urlMakerFromTemplate(rawUrl, { farmId });

  console.log('SideMenu | sagas | *makeRouting | action, path ', action, path);

  yield put(push(path ? `/${path}` : '/'));
}

function* getItemsByMode() {

}
// main saga
export default function* mainSaga() {
  yield takeEvery(actions.CHECK_MENU_ITEM, makeRouting);
  yield takeEvery(actions.GET_MENU_ITEM_BY_MODE, getItemsByMode);
  yield takeEvery(appActions.CHANGE_MODE, getItemsByMode);
}
