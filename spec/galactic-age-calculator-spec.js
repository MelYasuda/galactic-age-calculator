import { Age } from '../src/galactic-age-calculator.js';

describe('Earth Age', function() {
    it('shoud return earth age in days', function() {
      let testAge = new Age("1988");
        expect(testAge.earthAgeInDays()).toEqual(10950);
    });
});

describe('Mercury Age', function() {
    it('shoud return user mercury age', function() {
      let testAge = new Age("1988", "M");
        expect(testAge.ageInMercury()).toEqual(124);
    });
});

describe('Venus Age', function() {
    it('shoud return user Venus age', function() {
      let testAge = new Age("1988", "M");
        expect(testAge.ageInVenus()).toEqual(48);
    });
});

describe('Mars Age', function() {
    it('shoud return user mars age', function() {
      let testAge = new Age("1988", "M");
        expect(testAge.ageInMars()).toEqual(15);
    });
});

describe('Jupiter Age', function() {
    it('shoud return user Jupiter age', function() {
      let testAge = new Age("1988", "M");
        expect(testAge.ageInJupiter()).toEqual(2);
    });
});

describe('LeftYearsInMercury', function() {
    it('shoud return user left years in Mercury', function() {
      let testAge = new Age("1988", "M");
        expect(testAge.leftYearsInMercury()).toEqual("You have been dead for 44 years in Mercury.");
    });
  });

describe('LeftYearsInVenus', function() {
    it('shoud return user left years in Venus', function() {
      let testAge = new Age("1988", "M");
        expect(testAge.leftYearsInVenus()).toEqual("You have 32 years left in Venus.");
    });
});
