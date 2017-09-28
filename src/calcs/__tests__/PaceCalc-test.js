import * as Calcs from "../PaceCalc.js";

describe('predictGoal', () => {
  it('should predict the race goals from 5km to 10km', () => {
    //Given
    const recordedTime = 1800;
    const recordedDistance = 5;
    const goalDistance = 10;
    //When
    const prediction = Calcs.predictGoal(recordedTime, recordedDistance, goalDistance)
    //Then
    expect(prediction.time).toBe(3753);
    expect(prediction.pace).toBe(375);
  });
  it('should hanlde 0 input', () => {
    //Given
    const recordedTime = 0;
    const recordedDistance = 0;
    const goalDistance = 10;
    //When
    //Then
    const prediction = Calcs.predictGoal(recordedTime, recordedDistance, goalDistance)
    expect(prediction.time).toBe(0);
    expect(prediction.pace).toBe(0);
  });
});
