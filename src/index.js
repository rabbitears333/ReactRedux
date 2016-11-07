import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/app';
import reducers from './reducers';
import Resources from './components/Resources';
import require_auth from './components/require_auth';
import Async from './middleware/async';
const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory}>

          <Route path="/" component={App}><Route path="resources" component={require_auth(Resources)} /></Route>
      </Router>
  </Provider>
  , document.querySelector('.container'));
