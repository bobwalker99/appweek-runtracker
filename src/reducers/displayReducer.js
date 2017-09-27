//@flow
'use strict';

import { combineReducers } from "redux";

import * as types from "../constants/ActionTypes";

const initialTimeState = { hours: 0, minutes:30, seconds: 0};

const time = (state = initialTimeState, action) => {
    //console.log("state in display reducer: " + JSON.stringify(state));
    //console.log("action in display reducer: " + JSON.stringify(action));
    switch (action.type) {
      case types.HOURS_CHANGED:
          console.log('HOURS CHANGED: ' + action.hours );
          return { ...state, hours: action.hours }
      case types.MINUTES_CHANGED:
          console.log('MINUTES CHANGED: ' + action.minutes );
          return { ...state, minutes: action.minutes }
      case types.SECONDS_CHANGED:
          console.log('SECONDS CHANGED: ' + action.seconds );
          return { ...state, seconds: action.seconds }
      default:
          break;
    }
    return state;
};


const displayReducer = combineReducers({
    time
});

export default displayReducer;
