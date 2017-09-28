//@flow
'use strict';

import { combineReducers } from "redux";

import * as Calc from '../calcs/PaceCalc';
import * as DisplayCalc from '../calcs/DisplayCalc';
import * as types from "../constants/ActionTypes";

const initialState = {
    recordedTime: { hours: 0, minutes:30, seconds: 0 },
    recordedDistance: { distance: 5, miles: false },
    pace: { unitTime: 300, units: "km" }
};

initialState.goals = DisplayCalc.recalculateGoals(DisplayCalc.hmsToS(initialState.recordedTime),
                                                  initialState.recordedDistance.distance);

const INPUT_CHANGE_STATES = [types.HOURS_CHANGED,
                             types.MINUTES_CHANGED,
                             types.SECONDS_CHANGED,
                             types.RECORDED_TIME_CHANGED,
                             types.RECORDED_DISTANCE_CHANGED,
                             types.PACE_CHANGED];

const inputReducer = (state = initialState, action) => {
    if (INPUT_CHANGE_STATES.includes(action.type)) {
          const calcSeconds = DisplayCalc.hmsToS(state.recordedTime);
          const calcDistance = DisplayCalc.normaliseDistance(state.recordedDistance);
          const newState = { ...state,
                             goals: DisplayCalc.recalculateGoals(calcSeconds, calcDistance)
          };
          switch (action.type) {
            case types.HOURS_CHANGED:
                newState.recordedTime.hours = action.hours;
                break;
            case types.MINUTES_CHANGED:
                newState.recordedTime.minutes = action.minutes;
                break;
            case types.SECONDS_CHANGED:
                newState.recordedTime.seconds = action.seconds;
                break;
            case types.RECORDED_TIME_CHANGED:
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
    }
    return state;
};

export default inputReducer;
