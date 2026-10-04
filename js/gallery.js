/* CY CAFÉ — gallery.js */

document.addEventListener('DOMContentLoaded', () => {
  // Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        item.classList.toggle('hidden', filter !== 'all' && item.dataset.cat !== filter);
      });
    });
  });

  // Lightbox
  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = document.getElementById('lightboxImg');
  const lightboxCap  = document.getElementById('lightboxCaption');
  const closeBtn     = document.getElementById('lightboxClose');
  const prevBtn      = document.getElementById('lightboxPrev');
  const nextBtn      = document.getElementById('lightboxNext');

  let currentIndex = 0;
  const getVisible = () => [...items].filter(i => !i.classList.contains('hidden'));

  items.forEach(item => {
    item.addEventListener('click', () => {
      const visible = getVisible();
      currentIndex = visible.indexOf(item);
      if (currentIndex === -1) return;
      openLightbox(visible[currentIndex]);
    });
  });

  function openLightbox(item) {
    const img = item.querySelector('img');
    const cap = item.querySelector('.gallery-item__overlay span');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCap.textContent = cap ? cap.textContent : '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  prevBtn.addEventListener('click', () => {
    const visible = getVisible();
    currentIndex = (currentIndex - 1 + visible.length) % visible.length;
    openLightbox(visible[currentIndex]);
  });
  nextBtn.addEventListener('click', () => {
    const visible = getVisible();
    currentIndex = (currentIndex + 1) % visible.length;
    openLightbox(visible[currentIndex]);
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   prevBtn.click();
    if (e.key === 'ArrowRight')  nextBtn.click();
  });
});
