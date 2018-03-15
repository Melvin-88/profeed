/*
* Ingredients Actions
*
* This contains all the text for the Ingredients component.
*/
import { takeEvery, call, put } from 'redux-saga/effects'; // , take, call, put, race
import * as actions from './actions.js';
import serverApi from 'api';

function* submitRemoveIngredients(action) {
  const { ingredients } = action.payload;

  const data = {
    farm : ingredients.farmId,
    id : ingredients.id,
    name : ingredients.name,
    'dry_matter' : ingredients.dry,
    price : ingredients.price,
    'ignored_in_report' : ingredients.ignoredInReport,
    'is_animalfeed' : ingredients.isAnimalfeed
  };

  try {
    yield call(serverApi.removeIngredients, data);
    yield put(actions.closeDialog());
  } catch (e) {
    yield put(actions.responseError(e.message));
  }
}

export default function* mainSaga() {
  yield takeEvery(actions.DIALOG_INGREDIENTS_SUBMIT, submitRemoveIngredients);
}
