/**
 * Created by DzEN on 11/21/2016.
 */
import React      from 'react';
import ReactDOM   from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router } from 'react-router';
import thunk from 'redux-thunk';

import routes from '../router/router';
import reducer from './redux/reducer.js';
import mainSaga from './sagas/saga.js';
import myMiddleware from './redux/middleware.js';

import LanguageProvider from 'client/containers/LanguageProvider';
import { translationMessages } from 'translation/i18n';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const routerReduxMiddleware = routerMiddleware(browserHistory);
const store = createStore(reducer, applyMiddleware(myMiddleware, logger, sagaMiddleware, thunk, routerReduxMiddleware));
const history = syncHistoryWithStore(browserHistory, store);

// history.listen(location => console.log('react-router-redux | history | location ', location));

sagaMiddleware.run(mainSaga);

const component = (
  <Provider store={store}>
    <MuiThemeProvider>
      <LanguageProvider messages={translationMessages}>
        <Router history={history}>
          {routes(store)}
        </Router>
      </LanguageProvider>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(component, document.getElementById('react-view'));
