/*
* SchedulePage Reducer
*
* This contains all the text for the RationPage component.
*/
import * as actions from './actions.js';
// loadingCount
import { actions as actionLoadingCountsTable } from 'client/components/tables/TableScheduleRationLoadingCounts';

// ingredients
import { actions as actionIngredientsTable } from 'client/components/tables/TableScheduleRationIngredients';
// groups
import { actions as actionGroupsTable } from 'client/components/tables/TableScheduleRationGroups';

import { mapScheduleEdit } from 'helpers/mappers';

const initialState = {
  schedule: {},
  groups: [],
  loadingCount: {},
  ingredients: []
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.SCHEDULE_PAGE_SET) {
    const { schedule : oldSchedule }  = payload;
    const schedule = mapScheduleEdit(oldSchedule);

    return { ...schedule };
  }

  if (type === actions.SCHEDULE_PAGE_COEFFICIENT_CHANGE) {
    const newState = { ...state };

    newState.schedule.coefficient = payload.coefficient;

    return newState;
  }

  if (type === actionLoadingCountsTable.TABLE_SCHEDULE_RATION_LOADINGCOUNT_PROPERTY_EDITED) {
    const { loadingCount } = state;
    const { propertyName, value } = payload;

    loadingCount[propertyName] = value;

    return { ...state, loadingCount : { ...loadingCount } };
  }

  if (type === actionIngredientsTable.TABLE_SCHEDULE_INGREDIENT_PROPERTY_EDITED) {
    const { ingredients } = state;
    const { targetId, propertyName, value } = payload;

    const newIngredients = ingredients.map((item) => {
      if (targetId === item.id) {
        return { ...item, [propertyName]:value };
      }

      return item;
    });

    return { ...state, ingredients : [ ...newIngredients ] };
  }

  if (type === actionGroupsTable.TABLE_SCHEDULE_GROUPS_PROPERTY_EDITED) {
    const { groups } = state;
    const { targetId, propertyName, value } = payload;
    const newGroups = groups.map((item) => {
      if (targetId === item.id) {
        return { ...item, [propertyName]:value };
      }

      return item;
    });

    return { ...state, groups : [ ...newGroups ] };
  }

  return state;
}
