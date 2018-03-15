/*
* Register Selectors
*
* This contains all the text for the Register component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  open : state => state.selectLanguageRegisterDialog.open,
  locked : state => state.selectLanguageRegisterDialog.locked,
  error : state => state.selectLanguageRegisterDialog.error,
  errorMessage : state => state.selectLanguageRegisterDialog.errorMessage,
  languages : state => state.selectLanguageRegisterDialog.languages,
  language : state => state.languageProvider.language
});
