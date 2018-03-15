/**
 * Created by DzEN on 31.01.2017.
 */
import { createStructuredSelector } from 'reselect';
import { getMode } from 'helpers/selectorsHelper';

export const modelSelector = createStructuredSelector({
  mode : state => {
    console.log('MainPage | mode : ', getMode(state));
    return getMode(state);
  },
  permissions : state => state.app.permissions
});
