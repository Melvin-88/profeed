/*
* Ingredients index
*
* This contains all the text for the Ingredients component.
*/
import Container from './Container.js';
import reducer from './reducer.js';
import saga from './sagas.js';
import * as models from './selectors.js';
import * as actions from './actions.js';
import '../style.css';

export {
  reducer,
  saga,
  models,
  actions
};

export default Container;
