/*
* Register Actions
*
* This contains all the text for the Register component.
*/
import { bindActionCreators } from 'redux';

export const DIALOG_LANG_OPEN = 'DialogCheckLanguage/DIALOG_LANG_OPEN';
export const DIALOG_LANG_CLOSE = 'DialogCheckLanguage/DIALOG_LANG_CLOSE';
export const DIALOG_LANG_CHECKED = 'DialogCheckLanguage/DIALOG_LANG_CHECKED';

function openDialog() {
  return { type : DIALOG_LANG_OPEN };
}

function closeDialog() {
  return { type : DIALOG_LANG_CLOSE };
}

function submitCheckLanguage(language) {
  return { type : DIALOG_LANG_CHECKED, payload : { language } };
}

function containerActions(dispatch) {
  return bindActionCreators({ closeDialog, openDialog, submitCheckLanguage }, dispatch);
}

export { containerActions, closeDialog, openDialog, submitCheckLanguage };
