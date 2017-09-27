//@flow
import { combineReducers } from "redux";

import * as types from "../constants/ActionTypes";

const display = (state = null, action) => {
    console.log("state in display reducer: " + JSON.stringify(state));
    console.log("action in display reducer: " + JSON.stringify(action));
    switch (action.type) {
      case types.HOURS_CHANGED:
        console.log('HOURS CHANGED: ' + action.hours );
        break;
    default:
        break;
    }
    return state;
};


const displayReducer = combineReducers({
    display
});

export default displayReducer;
