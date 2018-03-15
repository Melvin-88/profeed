/*
* AnimalfeedsPage Actions
*
* This contains all the text for the AnimalfeedsPage component.
*/
import { bindActionCreators } from 'redux';
export const ANIMALFEEDS_PAGE_GET = 'AnimalfeedsPage/ANIMALFEEDS_PAGE_GET';
export const ANIMALFEEDS_PAGE_SET = 'AnimalfeedsPage/ANIMALFEEDS_PAGE_SET';
export const ANIMALFEEDS_PAGE_CALL_SHOW_ADD_DIALOG = 'AnimalfeedsPage/ANIMALFEEDS_PAGE_CALL_SHOW_ADD_DIALOG';
export const ANIMALFEEDS_PAGE_CALL_SHOW_EDIT_DIALOG = 'AnimalfeedsPage/ANIMALFEEDS_PAGE_CALL_SHOW_EDIT_DIALOG';
export const ANIMALFEEDS_PAGE_CALL_SHOW_REMOVE_DIALOG = 'AnimalfeedsPage/ANIMALFEEDS_PAGE_CALL_SHOW_REMOVE_DIALOG';

function getAnimalfeeds(farmId) {
  return { type : ANIMALFEEDS_PAGE_GET, payload : { farmId } };
}

function setAnimalfeeds(animalfeeds) {
  return { type :ANIMALFEEDS_PAGE_SET, payload : { animalfeeds } };
}

function showAnimalfeedsAddDialog() {
  return { type : ANIMALFEEDS_PAGE_CALL_SHOW_ADD_DIALOG };
}

function showAnimalfeedsEditDialog(animalfeed) {
  return { type : ANIMALFEEDS_PAGE_CALL_SHOW_EDIT_DIALOG, payload : { animalfeed } };
}

function showAnimalfeedsRemoveDialog(animalfeed) {
  return { type : ANIMALFEEDS_PAGE_CALL_SHOW_REMOVE_DIALOG, payload : { animalfeed } };
}

function containerActions(dispatch) {
  return bindActionCreators({ getAnimalfeeds, setAnimalfeeds, showAnimalfeedsAddDialog,
    showAnimalfeedsEditDialog, showAnimalfeedsRemoveDialog }, dispatch);
}

export { containerActions, getAnimalfeeds, setAnimalfeeds, showAnimalfeedsAddDialog,
    showAnimalfeedsEditDialog, showAnimalfeedsRemoveDialog };
