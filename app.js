// ===== Mobile nav =====
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active'); // unified with CSS
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

// ===== Year =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// ===== Scroll to top =====
const scrollTopBtn = document.getElementById('scrollTop');
const onScroll = () => {
  if (!scrollTopBtn) return;
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
};
window.addEventListener('scroll', onScroll);
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );
}

// ===== Project search =====
const search = document.getElementById('projectSearch');
const list = document.getElementById('projectList');
if (search && list) {
  search.addEventListener('input', () => {
    const q = search.value.toLowerCase();
    list.querySelectorAll('.project').forEach(card => {
      const text = card.innerText.toLowerCase();
      const tags = card.getAttribute('data-tags') || '';
      card.style.display = (text.includes(q) || tags.toLowerCase().includes(q)) ? '' : 'none';
    });
  });
}

