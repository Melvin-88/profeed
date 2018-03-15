/*
* Ingredients Actions
*
* This contains all the text for the Ingredients component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitAddIngredients(action) {
  const { ingredients } = action.payload;

  const data = {
    farm : ingredients.farmId,
    name : ingredients.name,
    'dry_matter' : ingredients.dry,
    'ignored_in_report' : ingredients.ignoredInReport,
    'is_animalfeed' : ingredients.isAnimalfeed
  };

  try {
    yield call(serverApi.addIngredients, data);
    yield put(actions.closeDialog());
  } catch (e) {
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_INGREDIENTS_SUBMIT, submitAddIngredients);
}
