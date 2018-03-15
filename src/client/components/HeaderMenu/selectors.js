/*
* HeaderMenuExt Selectors
*
* This contains all the text for the HeaderMenuExt component.
*/

import { createStructuredSelector } from 'reselect';
import { getMode } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  mode: state => getMode(state),
  user : state => state.app.user
});
