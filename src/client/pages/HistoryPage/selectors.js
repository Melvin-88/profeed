/*
* HistoryPage Selectors
*
* This contains all the text for the HistoryPage component.
*/

import { createStructuredSelector } from 'reselect';
import { HISTORY_CHAPTERS } from 'helpers/constants';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  history: state => state.historyPage.history,
  chapters :  state => {
    return HISTORY_CHAPTERS.filter((itemH) => state.app.permissions.find(itemP => {
      return itemH.modelSelector === `${itemP.label}.${itemP.name}.view`;
    }));
  },
  chapter : state => state.historyPage.chapter,
  permissions : state => {
    return state.app.permissions.filter((itemP) => HISTORY_CHAPTERS.find(itemH => {
      return itemH.modelSelector === `${itemP.label}.${itemP.name}.view`;
    }));
  },
  farmId : state => getFarmId(state)
});
