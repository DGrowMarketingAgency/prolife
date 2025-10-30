const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});
const slider = document.getElementById("sliderTrack");
const logos = slider.children;
const visibleCount = 5; // always 5 visible
const total = logos.length;
let index = 0;

// Clone the first few logos to create seamless looping
for (let i = 0; i < visibleCount; i++) {
  slider.appendChild(logos[i].cloneNode(true));
}

const logoWidth = logos[0].offsetWidth + 60; // width + gap

function slideNext() {
  index++;
  slider.style.transform = `translateX(-${index * logoWidth}px)`;

  // Reset to start when the loop reaches the cloned section
  if (index >= total) {
    setTimeout(() => {
      slider.style.transition = "none";
      index = 0;
      slider.style.transform = `translateX(0)`;
      setTimeout(() => {
        slider.style.transition = "transform 0.6s ease-in-out";
      }, 100);
    }, 600);
  }
}

setInterval(slideNext, 2000);
