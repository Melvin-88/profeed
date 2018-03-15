/*
* TableRationIngredients Actions
*
* This contains all the text for the TableRationIngredients component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import { actions as dialogAddActions } from 'client/components/dialogs/rationingredients/DialogRationIngredientsAdd';
import { actions as dialogEditActions } from 'client/components/dialogs/rationingredients/DialogRationIngredientsEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/rationingredients/DialogRationIngredientsRemove';
import * as actions from './actions.js';

import serverApi from 'api';

function* getIngredients(action) {
  const { payload } = action;

  // console.log(action);

  try {
    const res = yield call(serverApi.getIngredients, payload.farmId);

    yield put(actions.setIngredients(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* addTableRationIngredientsDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* editTableRationIngredientsDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.ingredient));
}

function* removeTableRationIngredientsDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.ingredient));
}

export default function* mainSaga() {
  yield takeEvery(actions.TABLE_RATION_INGREDIENTS_GET_INGREDIENTS, getIngredients);
  yield takeEvery(actions.TABLE_RATION_INGREDIENTS_SHOW_ADD_DIALOG, addTableRationIngredientsDialogShow);
  yield takeEvery(actions.TABLE_RATION_INGREDIENTS_SHOW_EDIT_DIALOG, editTableRationIngredientsDialogShow);
  yield takeEvery(actions.TABLE_RATION_INGREDIENTS_SHOW_REMOVE_DIALOG, removeTableRationIngredientsDialogShow);
}
