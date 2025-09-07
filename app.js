/* app.js
   Handles:
   - mobile nav toggle
   - project search
   - scroll-to-top button
   - reveal-on-scroll animations (intersection observer)
   - skill bar animations
   - auto-update year
*/

/* ---------- Mobile nav ---------- */
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

/* ---------- Auto-update year ---------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Scroll to top ---------- */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (!scrollTopBtn) return;
  if (window.scrollY > 300) scrollTopBtn.classList.add('show');
  else scrollTopBtn.classList.remove('show');
});
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------- Project search ---------- */
const searchInput = document.getElementById('projectSearch');
const projectList = document.getElementById('projectList');
if (searchInput && projectList) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    projectList.querySelectorAll('.project').forEach(card => {
      const text = (card.innerText || '').toLowerCase();
      const tags = (card.getAttribute('data-tags') || '').toLowerCase();
      card.style.display = (q === '' || text.includes(q) || tags.includes(q)) ? '' : 'none';
    });
  });
}

/* ---------- Reveal on scroll (IntersectionObserver) ---------- */
const revealItems = document.querySelectorAll('.reveal');
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -5% 0px' };
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate nested skill bars when a skills card reveals
      entry.target.querySelectorAll('.skill-bar span').forEach(span => {
        const w = span.style.width || span.getAttribute('data-width') || '0%';
        // set from 0 to final width for animation
        span.style.width = w;
      });

      obs.unobserve(entry.target);
    }
  });
}, observerOptions);
revealItems.forEach(i => revealObserver.observe(i));

/* ---------- Initialize skill bar widths immediately if visible on load ---------- */
document.querySelectorAll('.skill-bar span').forEach(span => {
  // if width is set inline (we used e.g., style="width:85%"), store and reset to 0 for reveal animation
  const w = span.style.width || '0%';
  span.style.width = '0%';
  span.setAttribute('data-width', w);
});

/* Force check on load (in case items are in viewport) */
window.addEventListener('load', () => {
  // trigger intersection observer by scrolling a tiny bit (some browsers need this)
  if ('requestAnimationFrame' in window) requestAnimationFrame(() => window.scrollTo({ top: 0 }));
});

/* ---------- Accessibility: smooth anchor scrolling ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = a.getAttribute('href');
    if (target.length > 1 && document.querySelector(target)) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close nav on mobile
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });
});
