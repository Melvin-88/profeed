/*
* TableRationIngredients Selectors
*
* This contains all the text for the TableRationIngredients component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  ingredients : state => state.rationIngredientsTable && state.rationIngredientsTable.ingredients &&
    [ ...state.rationIngredientsTable.ingredients ],
  tableData : state => {
    return state.rationPage.ration && state.rationPage.ration.ingredients && [ ...state.rationPage.ration.ingredients ];
  },
  rawPartForCalculate : state => {
    const arrGroups  = state.rationPage.ration && state.rationPage.ration.groups &&
      [ ...state.rationPage.ration.groups ];
    const coefficient = state.rationPage.ration && state.rationPage.ration.coefficient;

    if (!arrGroups) return 0;

    const rawCalculatedPart = arrGroups.reduce((v, item) => {
      return v + (item.animal_count * item.coefficient);
    }, 0);

    const totalAnimals = arrGroups.reduce((v, item) => v + item.animal_count, 0);

    return rawCalculatedPart * coefficient / (100 * 100 * totalAnimals);
  },
  farmId : state => getFarmId(state)
});
