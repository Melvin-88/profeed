/*
* IngredientsPage Actions
*
* This contains all the text for the IngredientsPage component.
*/
import { takeEvery, put, call, select } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import { actions as dialogAddActions } from 'client/components/dialogs/ingredients/DialogIngredientsAdd';
import { actions as dialogEditActions } from 'client/components/dialogs/ingredients/DialogIngredientsEdit';
import { actions as dialogRemoveActions } from 'client/components/dialogs/ingredients/DialogIngredientsRemove';
import { getFarmId } from 'helpers/selectorsHelper';
import serverApi from 'api';

function* getIngredients(action) {
  const { payload } = action;

  try {
    const res = yield call(serverApi.getIngredients, payload.farmId);

    yield put(actions.setIngredients(res.data));
  } catch (e) {
    console.error('error ', e);
  }
}

function* addIngredientsDialogShow() {
  yield put(dialogAddActions.openDialog());
}

function* editIngredientsDialogShow(action) {
  yield put(dialogEditActions.openDialog(action.payload.ingredients));
}

function* removeIngredientsDialogShow(action) {
  yield put(dialogRemoveActions.openDialog(action.payload.ingredients));
}

function* updateIngredients() {
  const state = yield select();
  const data = {
    payload : {
      farmId : getFarmId(state)
    }
  };

  yield getIngredients(data);
}

export default function* mainSaga() {
  yield takeEvery(actions.INGREDIENTS_PAGE_GET, getIngredients);
  yield takeEvery(actions.INGREDIENTS_PAGE_CALL_SHOW_ADD_DIALOG, addIngredientsDialogShow);
  yield takeEvery(actions.INGREDIENTS_PAGE_CALL_SHOW_EDIT_DIALOG, editIngredientsDialogShow);
  yield takeEvery(actions.INGREDIENTS_PAGE_CALL_SHOW_REMOVE_DIALOG, removeIngredientsDialogShow);
  yield takeEvery(dialogAddActions.DIALOG_INGREDIENTS_SUBMIT_SUCCESS, updateIngredients);
  yield takeEvery(dialogEditActions.DIALOG_INGREDIENTS_SUBMIT_SUCCESS, updateIngredients);
  yield takeEvery(dialogRemoveActions.DIALOG_INGREDIENTS_SUBMIT_SUCCESS, updateIngredients);
}
