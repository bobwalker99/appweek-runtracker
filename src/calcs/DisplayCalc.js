//@flow
'use strict';

import * as GoalCalc from './PaceCalc';

const MILE_KM_CONVERTER = 1.609344;

export const calculateDisplayDistanceOnUnitChange = (currentDistance:number,
                                                    previousUnitsIsMiles:boolean,
                                                    newUnitsIsMiles:boolean) => {
    var calcDistance = currentDistance;
    if (previousUnitsIsMiles && !newUnitsIsMiles) {
      //was miles, convert to km
      calcDistance = currentDistance * MILE_KM_CONVERTER;
    }
    else if (!previousUnitsIsMiles && newUnitsIsMiles) {
      //was km convert to miles
      calcDistance = currentDistance / MILE_KM_CONVERTER;
    }
    if (calcDistance === currentDistance) {
        return currentDistance;
    }
    else {
        return Math.round(calcDistance * 100) / 100;
    }
}

export const normaliseDistance =distance => {
    if (!distance.miles) {
      return distance.distance;
    }
    return distance.distance * MILE_KM_CONVERTER;

};

const pad = num => {
    return ("0"+num).slice(-2);
};

export const hhmmss = secs => {
  var minutes = Math.floor(secs / 60);
  secs = secs%60;
  var hours = Math.floor(minutes/60)
  minutes = minutes%60;
  return pad(hours)+":"+pad(minutes)+":"+pad(secs);
}

export const mmss = secs => {
  var minutes = Math.floor(secs / 60);
  secs = secs%60;
  minutes = minutes%60;
  return pad(minutes)+":"+pad(secs);
}

export const hmsToS = recordedTime => {
    return (recordedTime.hours * 60 * 60) +
           (recordedTime.minutes * 60) +
           (recordedTime.seconds);
}

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

export const recalculateGoals = (recordedSeconds:number, recordedDistance:number) => {
    return distancesInKm.map((item, index) => {
      const goal = GoalCalc.predictGoal(recordedSeconds,
                                        recordedDistance,
                                        item.distance)
      return { distanceLabel: item.label,
               distanceCalc: item.distance,
               time: goal.time,
               pace: goal.pace };
    });
};
