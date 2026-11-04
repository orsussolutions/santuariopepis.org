'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (menuButton && nav) {
    const closeMenu = () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir el menú');
    };
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Cerrar el menú' : 'Abrir el menú');
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox) {
    const fullImage = document.getElementById('lightbox-image');
    const caption = document.getElementById('lightbox-caption');
    const closeButton = lightbox.querySelector('.lightbox-close');
    let lastFocused = null;
    const close = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      fullImage.removeAttribute('src');
      if (lastFocused) lastFocused.focus();
    };
    document.querySelectorAll('.gallery-item').forEach((item) => {
      item.addEventListener('click', () => {
        lastFocused = item;
        fullImage.src = item.dataset.full;
        fullImage.alt = item.dataset.alt || '';
        caption.textContent = item.dataset.alt || '';
        lightbox.setAttribute('aria-hidden', 'false');
        lightbox.classList.add('is-open');
        document.body.classList.add('lightbox-open');
        closeButton.focus();
      });
    });
    closeButton.addEventListener('click', close);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) close();
    });
    document.addEventListener('keydown', (event) => {
      if (lightbox.classList.contains('is-open')) {
        if (event.key === 'Escape') close();
        if (event.key === 'Tab') {
          event.preventDefault();
          closeButton.focus();
        }
      }
    });
  }

  // La alternativa tipográfica permanece visible hasta que se haya cargado la portada real.
  document.querySelectorAll('.new-book-cover__image').forEach((img) => {
    const updateCover = () => {
      if (img.naturalWidth > 0) {
        img.style.visibility = 'visible';
      } else {
        img.style.display = 'none';
      }
    };
    img.addEventListener('load', updateCover, { once: true });
    img.addEventListener('error', updateCover, { once: true });
    if (img.complete) updateCover();
  });
});
