import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import * as RA from 'ramda-adjunct';

import { store,  history, persistor } from './store';
import { Routes } from 'scenes';
import './index.styl';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<div>Loading</div>} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Route path="/" component={Routes} />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

const rootElement = document.getElementById('root');
if (RA.isNotNil(rootElement)) {
  ReactDOM.render(<App />, rootElement);
}
