import { Age } from '../src/galactic-age-calculator.js';

describe('Earth Age', function() {
    it('shoud return earth age in days', function() {
      let testAge = new Age("1988");
        expect(testAge.earthAgeInDays()).toEqual(10950);
    });
});

describe('Mercury Age', function() {
    it('shoud return user mercury age', function() {
      let testAge = new Age("1988");
        expect(testAge.ageInMercury()).toEqual(124);
    });
});

describe('Venus Age', function() {
    it('shoud return user venus age', function() {
      let testAge = new Age("1988");
        expect(testAge.ageInVenus()).toEqual(48);
    });
});
