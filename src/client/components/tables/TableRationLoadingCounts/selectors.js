/*
* TableRationLoadingCounts Selectors
*
* This contains all the text for the TableRationLoadingCounts component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  loadingCounts : state => state.rationLoadingCountsTable.loadingCounts,
  mixers : state => state.rationLoadingCountsTable.mixers,
  tableData : state => {
    // console.log('selector : ', state.rationPage.ration && state.rationPage.ration.loading_counts);

    return state.rationPage.ration && state.rationPage.ration.loading_counts &&
      [ ...state.rationPage.ration.loading_counts ];
  },
  weight : state => {
    const arr = state.rationPage.ration && state.rationPage.ration.ingredients &&
      [ ...state.rationPage.ration.ingredients ];

    if (arr) {
      return arr.reduce((v, item) => v + +item.weight, 0);
    }

    return 0;
  },
  weightWithTotalCoeffs : state => {
    const arrIng = state.rationPage.ration && state.rationPage.ration.ingredients &&
      [ ...state.rationPage.ration.ingredients ];
    const arrGroups  = state.rationPage.ration && state.rationPage.ration.groups &&
      [ ...state.rationPage.ration.groups ];
    const coefficient = state.rationPage.ration && state.rationPage.ration.coefficient;

    if (!arrIng || !arrGroups) return 0;

    const ingWeight = arrIng.reduce((v, item) => v + +item.weight, 0);

    return arrGroups.reduce((v, item) => v + (item.animal_count * ingWeight * item.coefficient * coefficient / (100 * 100)), 0);
  },
  animalCount : state => {
    const arr = state.rationPage.ration && state.rationPage.ration.groups &&
      [ ...state.rationPage.ration.groups ];

    if (arr) {
      return arr.reduce((v, item) => v + +item.animal_count, 0);
    }

    return 0;
  },
  farmId : state => getFarmId(state)
});
