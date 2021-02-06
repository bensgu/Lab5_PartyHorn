// main.js

// TODO


let volumeNumber = document.getElementById("volume-number");

volumeNumber.addEventListener("input", function() {
  
  document.getElementById("volume-slider").value = volumeNumber.value;
  document.getElementById("horn-sound").volume = volumeNumber.value / 100;
  updateImg(volumeNumber.value);
  
});

let volumeSlider = document.getElementById("volume-slider");

volumeSlider.addEventListener("input", function() {
  
  document.getElementById("volume-number").value = volumeSlider.value;
  document.getElementById("horn-sound").volume = volumeSlider.value / 100;
  updateImg(volumeSlider.value);
  
});
                                          
function updateImg(volumeValue) {
  
 let img = document.getElementById("volume-image");
 if (volumeValue >= 67) {
    img.src = "./assets/media/icons/volume-level-3.svg";
    document.getElementById("honk-btn").disabled = false;
 } else if (volumeValue >= 34) {
    img.src = "./assets/media/icons/volume-level-2.svg";
    document.getElementById("honk-btn").disabled = false;  
 } else if (volumeValue >= 1) {
    img.src = "./assets/media/icons/volume-level-1.svg";
    document.getElementById("honk-btn").disabled = false; 
 } else {
    img.src = "./assets/media/icons/volume-level-0.svg";
    document.getElementById("honk-btn").disabled = true;
 }
  
}



let airHorn = document.getElementById("radio-air-horn");

airHorn.addEventListener("click", function() {
  document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
  document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
});

let carHorn = document.getElementById("radio-car-horn");

carHorn.addEventListener("click", function() {
  document.getElementById("sound-image").src = "./assets/media/images/car.svg";
  document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
});

let partyHorn = document.getElementById("radio-party-horn");

partyHorn.addEventListener("click", function() {
  document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
  document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
});





let honkBtn = document.getElementById("honk-btn");
honkBtn.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("horn-sound").play();
});


