let index = 0;
viewSlides(index);

function slideShift(n) {
  viewSlides(index += n);
}

function viewSlides(n) {
  let slides = document.getElementsByClassName("konsepSlide");
  if (n > slides.length - 1) {
    index = 0;
  }
  if (n < 0) {
    index = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
  console.log("slide index: " + index);
  console.log("length " + slides.length);
}




