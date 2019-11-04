$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * 120) + 19;
    console.log("Number to achieve is " + targetNumber);

    var totalScore = 0;
    console.log("Your total score is " + totalScore);

    $("#scoreToAchieve").html(targetNumber);

    $("#yourTotalScore").html(totalScore);


    if ((scoreToAchieve === totalScore))
        wins++;


    $("#sailorMoon").on("click", function () {
        totalScore++;
        $("#yourTotalScore").html(totalScore)
        var moon = Math.floor(Math.random() * 120) + 19;
        console.log("Sailor Moon's gem value is " + moon);
    });

    $("#sailorMercury").on("click", function () {
        totalScore += mercury;
        $("#yourTotalScore").html(totalScore)
        var mercury = Math.floor(Math.random() * 120) + 19;
        console.log("Sailor Mercury's gem value is " + mercury);
    });

    $("#sailorVenus").on("click", function () {
        totalScore += venus;
        $("#yourTotalScore").html(totalScore)
        var venus = Math.floor(Math.random() * 120) + 19;
        console.log("Sailor Venus's gem value is " + venus);
    });

    $("#sailorMars").on("click", function () {
        totalScore += mars;
        $("#yourTotalScore").html(totalScore)
        var mars = Math.floor(Math.random() * 120) + 19;
        console.log("Sailor Mars's gem value is " + mars);
    });

    $("#sailorJupiter").on("click", function () {
        totalScore += jupiter;
        $("#yourTotalScore").html(totalScore)
        var jupiter = Math.floor(Math.random() * 120) + 19;
        console.log("Sailor Jupiter's gem value is " + jupiter);
    });

});