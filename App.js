// @flow
'use strict';

import React from 'react';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'

import appWeekRunTrackerApp from './src/reducers/index';
import VisibleAppContainer from './src/containers/VisibleAppContainer.react';

let store = createStore(
  appWeekRunTrackerApp,
  applyMiddleware(thunkMiddleware)
);

const App = () =>
  <Provider store={store}>
    <VisibleAppContainer />
  </Provider>;

export default App;
