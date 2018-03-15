/*
* Lang Selectors
*
* This contains all the text for the Lang component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  language: state => state.languageProvider.language
});
