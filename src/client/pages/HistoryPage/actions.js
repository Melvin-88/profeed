/*
* HistoryPage Actions
*
* This contains all the text for the HistoryPage component.
*/
import { bindActionCreators } from 'redux';
export const HISTORY_PAGE_GET = 'HistoryPage/HISTORY_PAGE_GET';
export const HISTORY_PAGE_SET = 'HistoryPage/HISTORY_PAGE_SET';
export const HISTORY_PAGE_SET_CHAPTER = 'HistoryPage/HISTORY_PAGE_SET_CHAPTER';


function getHistory(farmId, chapter) {
  return { type : HISTORY_PAGE_GET, payload : { farmId, chapter } };
}

function setHistory(history) {
  return { type :HISTORY_PAGE_SET, payload : { history } };
}

function setChapter(chapter) {
  return { type : HISTORY_PAGE_SET_CHAPTER, payload : { chapter } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getHistory, setHistory, setChapter }, dispatch);
}

export { containerActions, getHistory, setHistory, setChapter };
