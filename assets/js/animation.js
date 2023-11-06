const spinnerImg = document.getElementById("spinner-img");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

let spinnerAnimation;

startButton.addEventListener("click", () => {
    spinnerAnimation = startSpinnerAnimation();
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener("click", () => {
    stopSpinnerAnimation(spinnerAnimation);
    startButton.disabled = false;
    stopButton.disabled = true;
});

function startSpinnerAnimation() {
    const animation = spinnerImg.style.animation;
    spinnerImg.style.animation = "none"; 
    void spinnerImg.offsetWidth; 
    spinnerImg.style.animation = animation; 
    return animation;
}

function stopSpinnerAnimation(animation) {
    spinnerImg.style.animation = animation;
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}


const bloodGlass = document.getElementById("blood-glass");
const donateButton = document.getElementById("donate-button");

let isFilling = false;

donateButton.addEventListener("click", () => {
    if (!isFilling) {
        bloodGlass.style.height = "100%";
        isFilling = true;
    } else {
        bloodGlass.style.height = "0";
        isFilling = false;
    }
});
