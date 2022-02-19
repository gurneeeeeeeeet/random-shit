var gamePattern = [];
var clickedPattern = [];

var btnColors = ["red", "blue", "green", "yellow"];

var sounds = [new Audio("sounds/red.mp3"), new Audio("sounds/blue.mp3"), new Audio("sounds/green.mp3"), new Audio("sounds/yellow.mp3")];

function newSqnc() {
  var randNum = Math.floor(Math.random() * 4);
  var randColor = btnColors[randNum];
  gamePattern.push(randColor);
  $("#" + randColor).fadeIn(100).fadeOut(100).fadeIn(100);
  sounds[randNum].play();
}

$(".btn").click(function(event) {
  var chosenColor = event.target.id;
  clickedPattern.push(chosenColor);
  playSound(event.target.id);
  btnPress(event.target.id);
  console.log(clickedPattern);
});

function playSound(name) {
  for (var i=0; i<sounds.length; i++) {
    if (name === btnColors[i]) {
      sounds[i].play();
    }
  }
}

function btnPress(color) {
  $("#" + color).addClass("pressed");

  setTimeout(function() {
			$("#" + color).removeClass("pressed");
		}, 100);
}

$(document).keypress(function() {
  var started = false;
  if (!started) {
    newSqnc();
  }
});
