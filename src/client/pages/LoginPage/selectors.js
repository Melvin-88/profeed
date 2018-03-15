/**
 * Created by DzEN on 31.01.2017.
 */
import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  loginStatuses: state => state.loginPage
});
