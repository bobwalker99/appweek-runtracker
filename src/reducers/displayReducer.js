//@flow
'use strict';

import { combineReducers } from "redux";

import * as Calcs from '../calcs/PaceCalc';
import * as types from "../constants/ActionTypes";

const initialState = {
    recordedTime: { hours: 0, minutes:30, seconds: 0, calcSeconds: 1800 },
    recordedDistance: { distance: 0, miles: false },
    pace: { unitTime: 300, units: "km" }
};

const distancesInKm = [ { label: '5k',
                          distance: 5 },
                        { label: '10k',
                          distance: 10 },
                        { label: '10M',
                          distance: 16.09 },
                        { label: 'Half-Marathon',
                          distance: 21.0975 },
                        { label: 'Marathon',
                          distance: 42.195 } ];

const recalc = state => {
    return distancesInKm.map((item, index) => {
      //item.label, "TODO Calculated Time", "TODO Calculated Pace"
      return { distanceLabel: item.label,
               distanceCalc: item.distance,
               time: Calcs.predictedTime(state.recordedTime.calcSeconds,
                                         state.recordedDistance.distance,
                                         item.distance),
               pace: Calcs.predictedPace(state.recordedTime.calcSeconds,
                                         state.recordedDistance.distance,
                                         item.distance)
     };
    });
};


const inputReducer = (state = initialState, action) => {
    //console.log("state in display reducer: " + JSON.stringify(state));
    //console.log("action in display reducer: " + JSON.stringify(action));
    const newState = { ...state,
                       goals: recalc(state)
    };
    switch (action.type) {
      case types.HOURS_CHANGED:
          console.log('HOURS CHANGED: ' + action.hours );
          newState.recordedTime.hours = action.hours;
          break;
      case types.MINUTES_CHANGED:
          console.log('MINUTES CHANGED: ' + action.minutes );
          newState.recordedTime.minutes = action.minutes;
          break;
      case types.SECONDS_CHANGED:
          console.log('SECONDS CHANGED: ' + action.seconds );
          newState.recordedTime.seconds = action.seconds;
          break;
      case types.RECORDED_TIME_CHANGED:
          console.log('RECORDED TIME CHANGED: ' + action.time );
          newState.recordedTime.time = action.time;
          break;
      case types.RECORDED_DISTANCE_CHANGED:
          newState.recordedDistance = { distance: action.distance,
                                       miles: action.miles };
          break;
      case types.PACE_CHANGED:
          newState.pace = action.pace;
          break;
      default:
          break;
    }
    return newState;
};

export default inputReducer;
