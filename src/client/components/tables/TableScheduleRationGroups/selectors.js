/*
* TableRationGroups Selectors
*
* This contains all the text for the TableRationGroups component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  weight : state => {
    const arr = state.schedulePage.ingredients && [ ...state.schedulePage.ingredients ];

    if (arr) {
      return arr.reduce((v, item) => v + item.weight, 0);
    }

    return 0;
  },
  dryWeight : state => {
    const arr = state.schedulePage.ingredients && [ ...state.schedulePage.ingredients ];

    if (arr) {
      return arr.reduce((v, item) => v + +(item.weight * (item.dryMatter / 100)).toFixed(2), 0);
    }

    return 0;
  },
  rationCoefficient : state => state.schedulePage.schedule.coefficient,
  farmId : state => getFarmId(state)
});
