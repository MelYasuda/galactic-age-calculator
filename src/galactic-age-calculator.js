export class Age {
  constructor(year) {
    this.year = year;
  }

  // current year - user's age
  earthAgeInDays(){
    var years = new Date();
    const EarthAge = years.getFullYear() - this.year;
    return EarthAge * 365;
  }

  ageInMercury(){
    let DecimalAge = this.earthAgeInDays() / 88;
    return Math.floor(DecimalAge);
  }

  ageInVenus(){
    let DecimalAge = this.earthAgeInDays() / 225;
    return Math.floor(DecimalAge);
  }

  ageInMars(){
    let DecimalAge = this.earthAgeInDays() / 687;
    return Math.floor(DecimalAge);
  }

  ageInJupiter(){
    let DecimalAge = this.earthAgeInDays() / 4380;
    return Math.floor(DecimalAge);
  }
}
