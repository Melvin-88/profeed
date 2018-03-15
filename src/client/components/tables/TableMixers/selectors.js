/*
* TableRations Selectors
*
* This contains all the text for the TableRations component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  componentModel: state => state.someState
});
