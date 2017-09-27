//@flow
"use strict";

import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";

import { AppNavigator } from "../components/Navigator.react";

import * as types from "../constants/ActionTypes";
import * as routes from "../constants/Routes";

// Start with one route: The Home screen.
const firstAction = AppNavigator.router.getActionForPathAndParams(routes.NAVIGATION_HOME);
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const initialNavState = AppNavigator.router.getStateForAction(tempNavState);

const nav = (state = { ...initialNavState }, action) => {
    //console.log("state in nav reducer: " + JSON.stringify(state));
    //console.log("action in nav reducer: " + JSON.stringify(action));
    let nextState;
    switch (action.type) {
    case types.NAVIGATION_HOME:
        nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
        break;
    default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }

  // Simply return the original `state` if `nextState` is null or undefined.
    const retVal = nextState || state;
    console.log("retVal: " + JSON.stringify(retVal));
    return retVal;
};

const navigationReducer = combineReducers({
    nav
});

export default navigationReducer;
