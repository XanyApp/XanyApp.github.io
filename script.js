var slideIndex = 1
showSlides(slideIndex)

function currentSlide(n) {
  showSlides(slideIndex = n);
}

clickQuestion()

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function clickQuestion() {
  const containers = document.querySelectorAll(".faq-container .question-container");
  containers.forEach((qc) => {
    const question = qc.querySelector(".question");
    question.addEventListener("click", () => {
      if (!qc.classList.contains("expanded")) {
        const answerContainer = qc.querySelector(".answer-container");
        answerContainer.style.maxHeight = "0";
      }
      qc.classList.toggle("expanded");
      const isExpanded = qc.classList.contains("expanded");
      const answerContainer = qc.querySelector(".answer-container");
      const contentHeight = answerContainer.scrollHeight;
      answerContainer.style.maxHeight = isExpanded ? `${contentHeight}px` : "0";
    });    
  });
}

let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#nav-menu');

const hamburgerMenuEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

openHam.addEventListener('click', () => hamburgerMenuEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerMenuEvent("none", "none", "block"));

function toggleMenu(action) {
  if (action === 'open') {
    navigationItems.style.display = 'flex';
    closeHam.style.display = 'block';
    openHam.style.display = 'none';
  } else if (action === 'close') {
    navigationItems.style.display = 'none';
    closeHam.style.display = 'none';
    openHam.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var menuItems = document.querySelectorAll('.nav-menu-item');

  function closeMenu() {
    toggleMenu('close');
  }

  menuItems.forEach(function(item) {
    item.addEventListener('click', closeMenu);
  });
});