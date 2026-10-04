/* CY CAFÉ — main.js (shared across all pages) */

// Nav scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    })
  );
}

// Hero scroll arrows
const scrollUp   = document.getElementById('scrollUp');
const scrollDown = document.getElementById('scrollDown');
if (scrollUp)   scrollUp.addEventListener('click',   () => window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' }));
if (scrollDown) scrollDown.addEventListener('click', () => window.scrollBy({ top:  window.innerHeight, behavior: 'smooth' }));

// Scroll reveal (Intersection Observer)
document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll(
    '.coffee-card, .why__card, .stat, .about-snap__text, .about-snap__image-wrap, ' +
    '.findus__item, .timeline__item, .team__card, .values__item, .review-card, ' +
    '.stats-bar__item, .menu-card, .gallery-item'
  );

  if (!('IntersectionObserver' in window) || !revealTargets.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  revealTargets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.55s ${(i % 6) * 0.07}s ease, transform 0.55s ${(i % 6) * 0.07}s ease`;
    io.observe(el);
  });
});
