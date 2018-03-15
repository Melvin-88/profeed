/**
 * Created by DzEN on 28.01.2017.
 */
import LoginPage from './LoginPage';
import './LoginPage.css';
import saga from './sagas';
import { reducer as reduxFormReducer } from 'redux-form';
import reducer from './reducer';
import * as models from './selectors';
import * as actions from './actions';

export {
  reduxFormReducer,
  reducer,
  saga,
  models,
  actions
};

export default LoginPage;
