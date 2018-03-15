/*
* TableIngredients Selectors
*
* This contains all the text for the TableIngredients component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  componentModel: state => state.someState
});
