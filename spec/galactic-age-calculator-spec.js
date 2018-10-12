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

describe('Mars Age', function() {
    it('shoud return user mars age', function() {
      let testAge = new Age("1988");
        expect(testAge.ageInMars()).toEqual(15);
    });
});

describe('Jupiter Age', function() {
    it('shoud return user Jupiter age', function() {
      let testAge = new Age("1988");
        expect(testAge.ageInJupiter()).toEqual(2);
    });
});
