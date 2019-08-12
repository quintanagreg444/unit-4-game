/// Execute this code when the DOM has fully loaded.
$( document ).ready(function() {
 console.log( "ready!" );

  // The number we will manipulate by clicking crystals. Our "current guess" number.
var  currentGuess=0;
 //Generate random target number for game play to win. 
var randomNumber = randomNumGen(); 

 // Setting up our starting variables.
var gamesWon=0;
var gamesLost=0;
var crystals=0;

// Function that generates random values for our crystals and returns our crystals object.
function getRandomNumCrystals() {
  // Crystals object.
return { 
  red: {
    points: Math.floor(Math.random()*12) + 1,
    imageUrl: "assets/images/red.png"
    },
     blue: {
      points: Math.floor(Math.random()*12) + 1,
      imageUrl: "assets/images/blue.jpeg"
      },
      yellow: {
        points: Math.floor(Math.random()*12) + 1,
        imageUrl: "assets/images/yellow.jpg"
        },
        green: {
          points: Math.floor(Math.random()*12) + 1,
          imageUrl: "assets/images/green.jpg"
          },

  }
}

function renderCrystals(crystals){
  $(".gameArea").html("")
  for (var key in crystals) {
    var crystalDiv = $('<div class="crystalDiv col"'+ '>')
    crystalDiv.attr("data-crystal", crystals[key].points)
    var crystalImg = $('<img src=' + crystals[key].imageUrl+'>')
    crystalDiv.append(crystalImg)
    $(".gameArea").append(crystalDiv)
  }
}
$(document).on("click", ".crystalDiv", function() {
  var value= $(this).data("crystal")
  
  currentGuess+=value
  $("#userTotal").text(currentGuess)
  if (currentGuess===randomNumber){ 
    alert("Great job you win!");
    gamesWon++
    setGame()

  } else if (currentGuess>randomNumber) {
    gamesLost++
    alert("Sorry you lost that time!")
    setGame()

  }
  


})
 
  // Function to create a random number between 19 and 120.
function randomNumGen() {
  return  Math.floor(Math.random()*120)+19
}

  // Function that resets the game.
function setGame() {
// Make our current total number 0.
  currentGuess=0;
// Generate random crystal values.
  crystals = getRandomNumCrystals(); 
console.log(crystals)  // Generate a random target number and render it to the page.
  randomNumber = randomNumGen();
$("#wins").text(gamesWon)
$("#losses").text(gamesLost)
$("#userTotal").text(currentGuess)
  $("#target").html(randomNumber)
  renderCrystals(crystals)
}

  // Function that handles updating the page.
setGame()
  




      // Show defeat message, restart the game, and render the new "current guess" number.

    // Building our win/loss display and appending it to the page.

  // Function to update our "current guess" number. We are passing in the crystal that was clicked as an argument.

    // Update our "current guess" number based on which crystal was clicked.

  // Function that will render your "current guess" number to the page.

  // Call our functions to start the game!

  // Here we create an on.click event for the crystals.

    // Update our "current guess" number and re-render it.

    // Check to see if we have won or lost.

    // If our current guess number equals the target number..

      // Increment wins, restart the game, and update the page.

    // If our guess number exceeded our target number...

      // Increment wins, restart the game, and update the page.

    // If our guess number exceeded our target number...

      // Increment losses, restart the game, and update the page.
     });