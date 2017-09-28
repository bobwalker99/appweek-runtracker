//@flow
"use strict";

import { combineReducers } from "redux";
import inputReducer from "./displayReducer";
import navigationReducer from "./navigationReducer";

const appWeekRunTrackerApp = combineReducers({
    inputReducer,
    navigationReducer
});

export default appWeekRunTrackerApp;
