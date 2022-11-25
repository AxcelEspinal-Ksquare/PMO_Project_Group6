//Function to play background music
function musicPlay() {
  const audio = document.querySelector(".audio");
  audio.play();
  audio.volume = 0.05;
}

document.addEventListener("click", musicPlay);


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.navbar').style.top = "0";
  } else {
    document.querySelector('.navbar').style.top = "-150px";
  }
}