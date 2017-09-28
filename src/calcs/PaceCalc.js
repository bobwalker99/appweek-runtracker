//@flow
'use strict';

export const predictedTime=(previousRaceTime:number, previousRaceDistance:number, distance:number) =>{
  /*
  All times to be in seconds
  */
  const distanceModifier = Math.pow((distance/previousRaceDistance), 1.06);
  return Math.round(previousRaceTime * distanceModifier);
};

export const predictedPace=(previousRaceTime:number, previousRaceDistance:number, distance:number) => {
  /*
  All times to be in seconds
  */
  const predictedRaceTime = predictedTime(previousRaceTime, previousRaceDistance, distance)
  return Math.round(predictedRaceTime/distance);
};
