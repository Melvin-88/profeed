/*
* TableGroups Selectors
*
* This contains all the text for the TableGroups component.
*/

import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  componentModel: state => state.someState
});
