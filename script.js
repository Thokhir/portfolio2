// Toggle mobile menu
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide scroll-to-top button
window.onscroll = function() {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

// Auto update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Project search
function filterProjects() {
  const input = document.querySelector(".project-search").value.toLowerCase();
  document.querySelectorAll("#projectList .project").forEach(p => {
    const text = p.innerText.toLowerCase();
    p.style.display = text.includes(input) ? "" : "none";
  });
}

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
