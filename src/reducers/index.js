//@flow
"use strict";

import { combineReducers } from "redux";
import displayReducer from "./displayReducer";
import navigationReducer from "./navigationReducer";

const appWeekRunTrackerApp = combineReducers({
    displayReducer,
    navigationReducer
});

export default appWeekRunTrackerApp;
