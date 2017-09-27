//@flow
'use strict';

import * as types from "../constants/ActionTypes";

export const hoursChanged = hours => {
    console.log("Hours changed to: " + hours);
    return {
        type: types.HOURS_CHANGED,
        hours
    };
};

export const minutesChanged = minutes => {
    console.log("Minutes changed to: " + minutes);
    return {
        type: types.MINUTES_CHANGED,
        minutes
    };
};

export const secondsChanged = seconds =>  {
    console.log("Seconds changed to: " + seconds);
    return {
        type: types.SECONDS_CHANGED,
        seconds
    };
};
