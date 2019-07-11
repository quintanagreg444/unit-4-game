
$(document).ready(function() {
 var roundedNumber = Math.ceil(Math.random() * (120 - 19) + 19)
console.log(roundedNumber)
function getRandomNumber() {
 return Math.ceil(Math.random() * (12 - 1) + 1)
}
var crystal1 = getRandomNumber()
var crystal2= getRandomNumber()
var crystal3 = getRandomNumber()
var crystal4 = getRandomNumber()

$(".crystal1").data("value", crystal1) 
$(".crystal1").on("click", function() {
 console.log ($(this).data("value"))
})
$(".crystal2").on("click", function() {
 
})
$(".crystal3").on("click", function() {
 
})
$(".crystal4").on("click", function() {
 
})
})
