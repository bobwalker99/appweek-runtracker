import * as Calcs from "../PaceCalc.js";

describe('predictedTime', () => {
  it('predict the race time from 5km to 10km', () => {
    expect(Calcs.predictedTime(1800, 5, 10)).toBe(3753);
  });
});

describe('predictedPace', () => {
  it('predict the race pace from 5km to 10km', () => {
    expect(Calcs.predictedPace(1800, 5, 10)).toBe(375);
  });
});
