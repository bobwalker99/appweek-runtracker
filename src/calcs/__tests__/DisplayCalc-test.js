import * as Calcs from "../DisplayCalc.js";

describe('calculateDisplayDistanceOnUnitChange', () => {
  it('should calculate miles from kilometers if the unit changed', () => {
    expect(Calcs.calculateDisplayDistanceOnUnitChange(21.0975, false, true)).toBe(13.11);
  });
  it('should calculate kilometers from miles if the unit changed', () => {
    expect(Calcs.calculateDisplayDistanceOnUnitChange(13.10937873, true, false)).toBe(21.1);
  });
  it('should leave kilometers untouched if the unit has not changed', () => {
    expect(Calcs.calculateDisplayDistanceOnUnitChange(21.0975, false, false)).toBe(21.0975);
  });
  it('should leave miles untouched if the unit has not changed', () => {
    expect(Calcs.calculateDisplayDistanceOnUnitChange(13.10937873, true, true)).toBe(13.10937873);
  });
});

describe('recalculateGoals', () => {
  it('should calculate correctly when the hours change', () => {
    //Given
    const recordedTime = 2700; //about 45 minutes
    const recordedDistance = 10; //K

    //When
    const goals = Calcs.recalculateGoals(recordedTime,recordedDistance);

    //Then
    expect(goals).toHaveLength(5);
    const fiveK = goals[0];
    expect(fiveK.distanceCalc).toBe(5);
    expect(fiveK.time).toBe(1295);
    expect(fiveK.pace).toBe(259);

    const tenK = goals[1];
    expect(tenK.distanceCalc).toBe(10);
    expect(tenK.time).toBe(2700);
    expect(tenK.pace).toBe(270);

    const tenMiles = goals[2];
    expect(tenMiles.distanceCalc).toBe(16.09);
    expect(tenMiles.time).toBe(4470);
    expect(tenMiles.pace).toBe(278);

    //...And so on
  });
});
