//@flow
'use strict';

import { combineReducers } from 'redux';

import navigationReducer from './navigationReducer';

const appWeekRunTrackerApp = combineReducers({
  navigationReducer
});

export default appWeekRunTrackerApp;
