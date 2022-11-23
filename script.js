//Function to play background music
function musicPlay() {
  const audio = document.querySelector(".audio");
  audio.play();
  audio.volume = 0.01;
}

document.addEventListener("click", musicPlay);
