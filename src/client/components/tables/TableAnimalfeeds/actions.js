/*
* TableAnimalfeeds Actions
*
* This contains all the text for the TableAnimalfeeds component.
*/
import { bindActionCreators } from 'redux';
import { actions } from 'client/pages/IngredientsPage';

function callGetIngredients(farmId) {
  return actions.getIngredients(farmId);
}

function containerActions(dispatch) {
  return bindActionCreators({ callGetIngredients }, dispatch);
}

export { containerActions, callGetIngredients };
