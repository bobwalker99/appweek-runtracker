//@flow
'use strict';

import * as types from "../constants/ActionTypes";

export const hoursChanged = hours => {
    return {
        type: types.HOURS_CHANGED,
        hours
    };
};

export const minutesChanged = minutes => {
    return {
        type: types.MINUTES_CHANGED,
        minutes
    };
};

export const secondsChanged = seconds =>  {
    return {
        type: types.SECONDS_CHANGED,
        seconds
    };
};
