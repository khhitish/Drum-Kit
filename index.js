var drumButtons = document.querySelectorAll(".drum");
var numberOfDrums = drumButtons.length;

document.addEventListener("keydown", function (event) {
  var key = event.key;
  makesound(key);
  buttonAnimation(key);
});

for (var i = 0; i < numberOfDrums; i++) {
  drumButtons[i].addEventListener("click", function () {
    makesound(this.textContent);
    buttonAnimation(this.textContent);
  });
}

function makesound(drumText) {
  switch (drumText) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(key) {
  var bt = document.querySelector("." + key);
  bt.classList.add("pressed");
  setTimeout(function () {
    bt.classList.remove("pressed");
  }, 100);
}
