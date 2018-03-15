/*
* TableRationLoadingCounts Selectors
*
* This contains all the text for the TableRationLoadingCounts component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  weight : state => {
    const arr = state.schedulePage.ingredients && [ ...state.schedulePage.ingredients ];

    if (arr) {
      return arr.reduce((v, item) => v + +item.weight, 0);
    }

    return 0;
  },
  weightWithTotalCoeffs : state => {
    const arrIng = state.schedulePage.ingredients && [ ...state.schedulePage.ingredients ];
    const arrGroups  = state.schedulePage.groups && [ ...state.schedulePage.groups ];
    const coefficient = state.schedulePage.schedule.coefficient;

    if (!arrIng || !arrGroups) return 0;

    const ingWeight = arrIng.reduce((v, item) => v + +item.weight, 0);

    return arrGroups.reduce((v, item) => v + (item.animalCount * ingWeight * item.coefficient * coefficient / (100 * 100)), 0);
  },
  animalCount : state => {
    const arr = state.schedulePage.groups && [ ...state.schedulePage.groups ];

    if (arr) {
      return arr.reduce((v, item) => v + +item.animalCount, 0);
    }

    return 0;
  },
  farmId : state => getFarmId(state),
  mixers : state => state.scheduleRationLoadingCountTable.mixers && [ ...state.scheduleRationLoadingCountTable.mixers ]
});
