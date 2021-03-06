export class Age {
  constructor(year, gender) {
    this.year = year;
    this.gender = gender;
    this.lifeExpectancy = {
      "M":80,
      "F":90
    };
  }

  // current year - user's birth year
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

  leftYearsInMercury(){

    let leftYears = this.lifeExpectancy[this.gender] - this.ageInMercury();
    if(leftYears === 0){
      return "You'll die this year";
    } else if (leftYears > 0) {
      return "You have" + leftYears + "years left in Mercury.";
    } else {
      return "You have been dead for " + Math.abs(leftYears) + " years in Mercury.";
    }
  }

  leftYearsInVenus(){
    let leftYears = this.lifeExpectancy[this.gender] - this.ageInVenus();
    if(leftYears === 0){
      return "You'll die this year";
    } else if (leftYears > 0) {
      return "You have " + leftYears + " years left in Venus.";
    } else {
      return "You have been dead for " + Math.abs(leftYears) + " years in Venus.";
    }
  }

  leftYearsInMars(){
    let leftYears = this.lifeExpectancy[this.gender] - this.ageInMars();
    if(leftYears === 0){
      return "You'll die this year";
    } else if (leftYears > 0) {
      return "You have " + leftYears + " years left in Mars.";
    } else {
      return "You have been dead for " + Math.abs(leftYears) + " years in Mars.";
    }
  }

  leftYearsInJupiter(){
    let leftYears = this.lifeExpectancy[this.gender] - this.ageInJupiter();
    if(leftYears === 0){
      return "You'll die this year";
    } else if (leftYears > 0) {
      return "You have " + leftYears + " years left in Jupiter.";
    } else {
      return "You have been dead for " + Math.abs(leftYears) + " years in Jupiter.";
    }
  }
}
