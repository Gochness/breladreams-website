document.addEventListener('DOMContentLoaded', () => {
  // Year update
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Lightbox
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Bild Vorschau');

  const lbImg = document.createElement('img');
  lbImg.alt = '';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', 'Schließen');

  overlay.appendChild(lbImg);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  document.querySelectorAll('.gallery a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const img = link.querySelector('img');
      openLightbox(link.href, img ? img.alt : '');
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
});
