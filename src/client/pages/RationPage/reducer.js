/*
* RationPage Reducer
*
* This contains all the text for the RationPage component.
*/
import Immutable from 'immutable';
import * as actions from './actions.js';
// loadings
import { actions as actionRationLoadingTable } from 'client/components/tables/TableRationLoadingCounts';
import { actions as actionRationLoadingCountAdd } from
  'client/components/dialogs/rationloadingcounts/DialogRationLoadingCountsAdd';
import { actions as actionRationLoadingCountRemove } from
  'client/components/dialogs/rationloadingcounts/DialogRationLoadingCountsRemove';
import { actions as actionRationLoadingCountEdit } from
  'client/components/dialogs/rationloadingcounts/DialogRationLoadingCountsEdit';
// ingredients
import { actions as actionIngredientsTable } from 'client/components/tables/TableRationIngredients';
import { actions as actionRationIngredientsAdd } from
  'client/components/dialogs/rationingredients/DialogRationIngredientsAdd';
import { actions as actionRationIngredientsEdit } from
  'client/components/dialogs/rationingredients/DialogRationIngredientsEdit';
import { actions as actionRationIngredientsRemove  } from
  'client/components/dialogs/rationingredients/DialogRationIngredientsRemove';
// groups
import { actions as actionGroupsTable } from 'client/components/tables/TableRationGroups';
import { actions as actionRationGroupsAdd } from
  'client/components/dialogs/rationgroups/DialogRationGroupsAdd';
import { actions as actionRationGroupsEdit } from
  'client/components/dialogs/rationgroups/DialogRationGroupsEdit';
import { actions as actionRationGroupsRemove  } from
  'client/components/dialogs/rationgroups/DialogRationGroupsRemove';

const defaultState = {
  ration : {
    ingredients : [],
    'loading_counts' : [],
    groups : []
  }
};
const initialState = Immutable.fromJS(defaultState).toJS();

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === actions.RATION_PAGE_RESET) {
    const newState = { ...Immutable.fromJS(defaultState).toJS() };

    return newState;
  }

  if (type === actions.RATION_PAGE_SET) {
    const { ration }  = payload;

    return { ...state, ration };
  }

  if (type === actions.RATION_PAGE_COEFFICIENT_CHANGE) {
    const newState = { ...state };

    newState.ration.coefficient = payload.coefficient;

    return newState;
  }

  if (type === actionRationLoadingTable.TABLE_RATION_LOADINGCOUNT_PROPERTY_EDITED) {
    const { ration } = state;
    const { targetId, propertyName, value } = payload;
    const name = 'loading_counts';
    const newLoadings = ration.loading_counts.map((item) => {
      if (targetId === item.id) {
        return { ...item, [propertyName]:value };
      }

      return item;
    });

    ration[name] = [ ...newLoadings ];
    return { ...state, ration };
  }

  if (type === actionRationLoadingCountAdd.DIALOG_RATION_LOADING_COUNTS_SUBMIT) {
    const { ration } = state;
    const { loading } = payload;
    const name = 'loading_counts';

    loading[name] = ration.ingredients.reduce((prevVal, item) => prevVal + item.weight, 0) * loading.coefficient;

    ration.loading_counts.push(loading);
    return { ...state, ration };
  }

  if (type === actionRationLoadingCountRemove.DIALOG_RATION_LOADING_COUNTS_SUBMIT) {
    const { ration } = state;
    const { loading } = payload;
    const name = 'loading_counts';
    const newLoading = ration.loading_counts.filter((item) => item.id !== loading.id);

    ration[name] = [ ...newLoading ];
    return { ...state, ration };
  }

  if (type === actionRationLoadingCountEdit.DIALOG_RATION_LOADING_COUNTS_SUBMIT) {
    const { ration } = state;
    const { loading } = payload;
    const name = 'loading_counts';
    const newLoadings = ration.loading_counts.map((item) => {
      if (loading.id === item.id) {
        return loading;
      }

      return item;
    });

    ration[name] = [ ...newLoadings ];
    return { ...state, ration };
  }

  if (type === actionRationIngredientsAdd.DIALOG_RATIONINGREDIENTS_SUBMIT) {
    const { ration } = state;
    const { ingredient } = payload;

    ingredient.ordering = ration.ingredients.length;

    ration.ingredients.push(ingredient);
    return { ...state, ration };
  }

  if (type === actionRationIngredientsEdit.DIALOG_RATIONINGREDIENTS_SUBMIT) {
    const { ration } = state;
    const { ingredient } = payload;
    const newLoadings = ration.ingredients.map((item) => {
      if (ingredient.id === item.id) {
        return ingredient;
      }

      return item;
    });

    ration.ingredients = [ ...newLoadings ];
    return { ...state, ration };
  }

  if (type === actionRationIngredientsRemove.DIALOG_RATIONINGREDIENTS_SUBMIT) {
    const { ration } = state;
    const { ingredient } = payload;

    const newLoading = ration.ingredients.filter((item) => item.id !== ingredient.id);

    ration.ingredients = [ ...newLoading ];
    return { ...state, ration };
  }

  if (type === actionIngredientsTable.TABLE_RATION_INGREDIENT_PROPERTY_EDITED) {
    const { ration } = state;
    const { targetId, propertyName, value } = payload;
    const name = 'ingredients';
    const newIngredients = ration.ingredients.map((item) => {
      if (targetId === item.id) {
        return { ...item, [propertyName]:value };
      }

      return item;
    });

    ration[name] = [ ...newIngredients ];
    return { ...state, ration };
  }

  if (type === actionRationGroupsAdd.DIALOG_RATIONGROUPS_SUBMIT) {
    const { ration } = state;
    const { group } = payload;

    group.ordering = ration.ingredients.length;
    ration.groups.push(group);
    return { ...state, ration };
  }

  if (type === actionRationGroupsEdit.DIALOG_RATIONGROUPS_SUBMIT) {
    const { ration } = state;
    const { group } = payload;
    const newGroups = ration.groups.map((item) => {
      if (group.id === item.id) {
        return group;
      }

      return item;
    });

    ration.groups = [ ...newGroups ];
    return { ...state, ration };
  }

  if (type === actionRationGroupsRemove.DIALOG_RATIONGROUPS_SUBMIT) {
    const { ration } = state;
    const { group } = payload;

    const newGroups = ration.groups.filter((item) => item.id !== group.id);

    ration.groups = [ ...newGroups ];
    return { ...state, ration };
  }

  if (type === actionGroupsTable.TABLE_RATION_GROUPS_PROPERTY_EDITED) {
    const { ration } = state;
    const { targetId, propertyName, value } = payload;
    const name = 'groups';
    const newGroups = ration.groups.map((item) => {
      if (targetId === item.id) {
        return { ...item, [propertyName]:value };
      }

      return item;
    });

    ration[name] = [ ...newGroups ];
    return { ...state, ration };
  }

  return state;
}
