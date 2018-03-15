/*
* StocksPage Selectors
*
* This contains all the text for the StocksPage component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  permission : state => {
    return state.app.permissions.find((item) => item.label === 'manager' && item.name === 'stock');
  },
  stocks: state => state.stocksPage.stocks,
  farmId : state => getFarmId(state)
});
