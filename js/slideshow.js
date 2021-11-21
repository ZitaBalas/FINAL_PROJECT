let idx = 0;
const slides = document.getElementsByClassName('slide');

const carousel = () => {
  if (idx > slides.length - 1) idx = 0;
  
  for (let slide of slides) slide.style.display = 'none';  
  slides[idx].style.display = 'block';  
  idx++;
  setTimeout(carousel, 4000);
}
carousel();