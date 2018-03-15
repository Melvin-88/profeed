/*
* Ingredients Actions
*
* This contains all the text for the Ingredients component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitEditIngredients(action) {
  const { ingredients } = action.payload;

  const data = {
    farm : ingredients.farmId,
    id : ingredients.id,
    name : ingredients.name,
    'dry_matter' : ingredients.dry,
    'ignored_in_report' : ingredients.ignoredInReport,
    'is_animalfeed' : ingredients.isAnimalfeed
    // deleted: false
  };

  try {
    yield call(serverApi.editIngredients, data);
    yield put(actions.closeDialog());
  } catch (e) {
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_INGREDIENTS_SUBMIT, submitEditIngredients);
}
