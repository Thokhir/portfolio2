```javascript
// Toggle mobile menu
document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('active');
});

// Scroll-to-top button
const scrollTopBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 300);
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Project search filter
const searchInput = document.querySelector('#project-search');
const projects = document.querySelectorAll('.project');
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  projects.forEach(project => {
    const text = project.textContent.toLowerCase();
    project.style.display = text.includes(query) ? 'block' : 'none';
  });
});
```