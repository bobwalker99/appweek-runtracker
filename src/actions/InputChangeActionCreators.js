//@flow
'use strict';

import * as types from "../constants/ActionTypes";

export const hoursChanged = (hours: number) => {
    return {
        type: types.HOURS_CHANGED,
        hours
    };
};

export const minutesChanged = (minutes: number) => {
    return {
        type: types.MINUTES_CHANGED,
        minutes
    };
};

export const secondsChanged = (seconds: number) =>  {
    return {
        type: types.SECONDS_CHANGED,
        seconds
    };
};

export const recordedTimeChanged = (time: number) =>  {
    return {
        type: types.RECORDED_TIME_CHANGED,
        time
    };
};

export const recordedDistanceChanged = (distance: number, miles: boolean) =>  {
    return {
        type: types.RECORDED_DISTANCE_CHANGED,
        distance,
        miles
    };
};

export const paceChanged = (unitTime: number, miles: boolean) =>  {
    return {
        type: types.PACE_CHANGED,
        pace: { unitTime, miles }
    };
};
