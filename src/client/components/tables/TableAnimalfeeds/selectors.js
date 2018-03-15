/*
* TableAnimalfeeds Selectors
*
* This contains all the text for the TableAnimalfeeds component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  ingredients : state => state.ingredientsPage.ingredients,
  farmId : state => getFarmId(state)
});
