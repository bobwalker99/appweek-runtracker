//@flow
'use strict';

export const predictGoal=(previousRaceTime:number, previousRaceDistance:number, goalDistance:number) =>{
  /*
  All times to be in seconds, distances in km
  Based on Peter Reigel's:
    T2=T1×(D2÷D1)^1.06
  */
  const distanceModifier = Math.pow((goalDistance/previousRaceDistance), 1.06);
  const predictedTime = Math.round(previousRaceTime * distanceModifier);
  const predictedPace = Math.round(predictedTime/goalDistance);
  return { time: isNaN(predictedTime) ? 0 : predictedTime,
           pace: isNaN(predictedPace) ? 0 : predictedPace };
};
