$(document).ready(function(){

var targetNumber = Math.floor(Math.random() * 120) + 19;
console.log("Number to achieve is " + targetNumber);
if ((scoreToAchieve === totalScore))
wins++;    

$("#sailorMoon").on("click", function () {
    var moon = Math.floor(Math.random() * 120) + 19;
    console.log("Sailor Moon's gem value is " + targetNumber);
});
    

$("#sailorMercury").on("click", function () {
    var mercury = Math.floor(Math.random() * 120) + 19;
    console.log("Sailor Mercury's gem value is " + targetNumber); 
});
 
$("#sailorVenus").on("click", function () {
    var venus = Math.floor(Math.random() * 120) + 19;
    console.log("Sailor Venus's gem value is " + targetNumber);  
}); 

$("#sailorMars").on("click", function () {
    var mars = Math.floor(Math.random() * 120) + 19;
    console.log("Sailor Mars's gem value is " + targetNumber);    
});
 
$("#sailorJupiter").on("click", function () {
    var jupiter = Math.floor(Math.random() * 120) + 19;
    console.log("Sailor Jupiter's gem value is " + targetNumber);    
});

});