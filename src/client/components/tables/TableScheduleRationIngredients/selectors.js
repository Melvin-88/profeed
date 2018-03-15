/*
* TableRationIngredients Selectors
*
* This contains all the text for the TableRationIngredients component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  rawPartForCalculate : state => {
    const arrGroups  = state.schedulePage.groups && [ ...state.schedulePage.groups ];
    const coefficient = state.schedulePage.schedule && state.schedulePage.schedule.coefficient;

    if (!arrGroups) return 0;

    const rawCalculatedPart = arrGroups.reduce((v, item) => {
      return v + (item.animalCount * item.coefficient);
    }, 0);

    const totalAnimals = arrGroups.reduce((v, item) => v + item.animalCount, 0);

    return rawCalculatedPart * coefficient / (100 * 100 * totalAnimals);
  },
  farmId : state => getFarmId(state)
});
