import { Age } from '../src/galactic-age-calculator.js';

describe('Earth Age', function() {
    it('shoud return earth age in days', function() {
      let testAge = new Age("1988");
        expect(testAge.ageInDays()).toEqual(10950);
    });
});
