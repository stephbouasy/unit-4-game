var wins = 0;
var losses = 0;
var crystalValue = 0;
var scoreToAchieve = 0;
var moon = 5;
var mercury = Math.random;
var venus = Math.random;
var mars = Math.random;
var jupiter = Math.random;

var targetNumber = Math.floor(Math.random() * 120) + 19;
    console.log("Number to achieve is " + targetNumber);

$("#sailorMoon").on("click", function() {
    var moon = Math.floor(Math.random() * 20);
    console.log("Sailor Moon's gem value is  " + targetNumber);
    if ((scoreToAchieve === totalScore))
    wins++;
$("#sailorMercury").on("click", function() {
    
})



    var counter = 0;
    $("#yourTotalScore").html(counter);

    moon = Math.floor(Math.random() * 12) + 1;
    var sailorMoon = $("#sailorMoon");
    sailorMoon.attr("data-crystalvalue", moon);

    mercury = Math.floor(Math.random() * 12) + 1;
    var sailorMercury = $("#sailorMercury");
    sailorMercury.attr("data-crystalvalue", mercury);

    venus = Math.floor(Math.random() * 12) + 1;
    var sailorVenus = $("#sailorVenus");
    sailorVenus.attr("data-crystalvalue", venus);

    mars = Math.floor(Math.random() * 12) + 1;
    var sailorMars = $("#sailorMars");
    sailorMars.attr("data-crystalvalue", mars);

    jupiter = Math.floor(Math.random() * 12) + 1;
    var sailorJupiter = $("#sailorJupiter");
    sailorJupiter.attr("data-crystalvalue", jupiter);

    $(".img-thumbnail").click(function () {
        crystalvalue = ($(this).attr("data-crystalvalue"));
    counter += crystalvalue;
    $("yourTotalScore").html(counter);
    if (counter === targetNumber) {
       wins++;
       counter = 0;
       $("#winCount").html(wins);
    }
    else if (counter > targetNumber) {
        losses++;
        counter = 0;
        $("#lossCount").html(losses);
    }
    })
})