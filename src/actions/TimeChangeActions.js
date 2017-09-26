import * as types from '../constants/ActionTypes';

export function hoursChanged(hours) {
  console.log('Hours changed to: ' + hours);
  return {
    type: types.HOURS_CHANGED,
    data: hours
  };
};

export function minutesChanged(minutes) {
  console.log('Minutes changed to: ' + minutes);
  return {
    type: types.MINUTES_CHANGED,
    data: minutes
  };
};

export function secondsChanged(seconds) {
  console.log('Seconds changed to: ' + seconds);
  return {
    type: types.SECONDS_CHANGED,
    data: seconds
  };
};
