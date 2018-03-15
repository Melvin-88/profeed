/*
* RegisterPage Selectors
*
* This contains all the text for the RegisterPage component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  locked : state => state.registerPage.locked,
  errorMessage : state => state.registerPage.errorMessage
});
