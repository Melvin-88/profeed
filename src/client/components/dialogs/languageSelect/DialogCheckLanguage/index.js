/*
* Register index
*
* This contains all the text for the Register component.
*/
import Container from './Container.js';
import reducer from './reducer.js';
import * as models from './selectors.js';
import * as actions from './actions.js';
import saga from './sagas.js';


export {
  reducer,
  saga,
  models,
  actions
};

export default Container;
