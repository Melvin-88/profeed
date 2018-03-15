/*
* StocksPage Actions
*
* This contains all the text for the StocksPage component.
*/
import { bindActionCreators } from 'redux';
export const STOCKS_PAGE_GET = 'StocksPage/STOCKS_PAGE_GET';
export const STOCKS_PAGE_SET = 'StocksPage/STOCKS_PAGE_SET';

function getStocks(farmId) {
  return { type : STOCKS_PAGE_GET, payload : { farmId } };
}

function setStocks(stocks) {
  return { type :STOCKS_PAGE_SET, payload : { stocks } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getStocks, setStocks }, dispatch);
}

export { containerActions, getStocks, setStocks };
