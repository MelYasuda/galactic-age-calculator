
import { Age } from '../src/galactic-age-calculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#user-form").submit(function(event) {
    $("year").val(' ');
    event.preventDefault();
    var userYear = $("#year").val();
    var userGender = $("input:radio[name=gender]:checked").val();
    var newAge = new Age(userYear, userGender);
    $("#mercury").text(newAge.ageInMercury());
    $("#venus").text(newAge.ageInVenus());
    $("#mars").text(newAge.ageInMars());
    $("#jupiter").text(newAge.ageInJupiter());

    $("#mercury-expect").text(newAge.leftYearsInMercury());
    $("#venus-expect").text(newAge.leftYearsInVenus());
    $("#mars-expect").text(newAge.leftYearsInMars());
    $("#jupiter-expect").text(newAge.leftYearsInJupiter());

    $("#result").show();
  });
});
