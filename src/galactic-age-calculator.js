export class Age {
  constructor(year) {
    this.year = year;
  }

  ageInDays(){
    var years = new Date();
    const EarthAge = years.getFullYear() - this.year;
    return EarthAge * 365;
  }

}
