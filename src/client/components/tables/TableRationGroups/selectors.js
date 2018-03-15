/*
* TableRationGroups Selectors
*
* This contains all the text for the TableRationGroups component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  groups : state => state.rationGroupsTable && state.rationGroupsTable.groups &&
  [ ...state.rationGroupsTable.groups ],
  tableData : state => {
    return state.rationPage.ration && state.rationPage.ration.groups && [ ...state.rationPage.ration.groups ];
  },
  weight : state => {
    const arr = state.rationPage.ration && state.rationPage.ration.ingredients &&
    [ ...state.rationPage.ration.ingredients ];

    if (arr) {
      return arr.reduce((v, item) => v + item.weight, 0);
    }

    return 0;
  },
  dryWeight : state => {
    const arr = state.rationPage.ration && state.rationPage.ration.ingredients &&
      [ ...state.rationPage.ration.ingredients ];

    if (arr) {
      return arr.reduce((v, item) => v + +(item.weight * (item.dry_matter / 100)).toFixed(2), 0);
    }

    return 0;
  },
  rationCoefficient : state => state.rationPage.ration.coefficient,
  farmId : state => getFarmId(state)
});
