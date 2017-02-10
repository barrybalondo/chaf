import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import { Router, Route, browserHistory } from 'react-router';
import '../style/index.css';

const createStoreWithMiddleware=applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <Router history={browserHistory}>
      <Route path="/" component={App}>  
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
