
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


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}