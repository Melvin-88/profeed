/*
* WorksheetsPage Selectors
*
* This contains all the text for the WorksheetsPage component.
*/

import { createStructuredSelector } from 'reselect';
import { getFarmId } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  permission : state => state.app.permissions.find((item) => item.name === 'worksheet' && item.label === 'report'),
  worksheets: state => state.worksheetsPage.worksheets,
  farmId : state => getFarmId(state)
});
