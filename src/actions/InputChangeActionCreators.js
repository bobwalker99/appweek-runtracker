//@flow
'use strict';

import * as types from "../constants/ActionTypes";

export const hoursChanged = (hours: number) => {

    console.log("Hours changed to: " + hours);
    return {
        type: types.HOURS_CHANGED,
        hours
    };
};

export const minutesChanged = (minutes: number) => {
  console.log("Minutes changed to: " + minutes);
    return {
        type: types.MINUTES_CHANGED,
        minutes
    };
};

export const secondsChanged = (seconds: number) =>  {
    console.log("Seconds changed to: " + seconds);
    return {
        type: types.SECONDS_CHANGED,
        seconds
    };
};

export const timeChanged = (time: number) =>  {
    console.log("Time changed to: " + time);
    return {
        type: types.TIME_CHANGED,
        time
    };
};

export const distanceChanged = (distance: number, miles: boolean) =>  {
    console.log("Distance changed to: " + distance + (miles ? "miles" : "km"));
    return {
        type: types.RECORDED_DISTANCE_CHANGED,
        distance,
        miles
    };
};

export const paceChanged = (unitTime: number, miles: boolean) =>  {
    console.log("Pace changed to: " + unitTime + " per " + (miles ? "mile" : "km"));
    return {
        type: types.PACE_CHANGED,
        pace: { unitTime, miles }
    };
};
