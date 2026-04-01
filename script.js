// Fade-in animation on load
window.addEventListener("load", () => {
  const poster = document.getElementById("poster");
  poster.style.opacity = 0;
  poster.style.transform = "translateY(40px)";

  setTimeout(() => {
    poster.style.transition = "all 1s ease";
    poster.style.opacity = 1;
    poster.style.transform = "translateY(0)";
  }, 200);
});

// Button click animation
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  btn.innerText = "🚀 Loaded!";
  btn.style.background = "#667eea";
  btn.style.color = "#fff";
});

// Mouse move tilt effect
document.addEventListener("mousemove", (e) => {
  const poster = document.getElementById("poster");
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  poster.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Reset tilt when mouse leaves
document.addEventListener("mouseleave", () => {
  const poster = document.getElementById("poster");
  poster.style.transform = "rotateY(0deg) rotateX(0deg)";
});
