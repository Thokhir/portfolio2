// Mobile nav
document.getElementById('menuBtn').addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active');
});

// Year in footer
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
});

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

// Scroll to top button (kept from previous code)
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 300);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Modal for zoom functionality
document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContent = modalOverlay.querySelector('.modal-content');
  const modalClose = modalOverlay.querySelector('.modal-close');

  document.querySelectorAll('.media-container img, .media-container video').forEach(media => {
    media.addEventListener('click', (e) => {
      e.stopPropagation();
      modalContent.innerHTML = ''; // Clear previous content

      let clonedMedia;
      if (media.tagName === 'IMG') {
        clonedMedia = media.cloneNode(true);
      } else if (media.tagName === 'VIDEO') {
        clonedMedia = document.createElement('video');
        clonedMedia.src = media.querySelector('source').src;
        clonedMedia.setAttribute('controls', '');
        clonedMedia.setAttribute('loop', '');
        clonedMedia.setAttribute('autoplay', '');
        clonedMedia.setAttribute('playsinline', '');
        clonedMedia.poster = media.poster;
      }
      modalContent.appendChild(clonedMedia);
      modalOverlay.style.display = 'flex';
    });
  });

  modalClose.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    const videoInModal = modalOverlay.querySelector('video');
    if (videoInModal) {
      videoInModal.pause();
    }
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
      const videoInModal = modalOverlay.querySelector('video');
      if (videoInModal) {
        videoInModal.pause();
      }
    }
  });
});
