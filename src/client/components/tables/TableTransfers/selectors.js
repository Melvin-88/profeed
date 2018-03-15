/*
* TableTransfers Selectors
*
* This contains all the text for the TableTransfers component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  componentModel: state => state.someState
});
