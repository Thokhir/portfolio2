// Mobile nav
document.getElementById('menuBtn').addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('is-open');
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Project search
const search = document.getElementById('projectSearch');
const list = document.getElementById('projectList');
search.addEventListener('input', () => {
  const q = search.value.toLowerCase();
  list.querySelectorAll('.project').forEach(card => {
    const text = card.innerText.toLowerCase();
    const tags = card.getAttribute('data-tags') || '';
    card.style.display = (text.includes(q) || tags.includes(q)) ? '' : 'none';
  });
});

// AOS initialization
document.addEventListener('DOMContentLoaded', (event) => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
