/* ===== SCROLL PROGRESS ===== */
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
});

/* ===== REVEAL ON SCROLL ===== */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '-40px' });
revealEls.forEach(el => revealObserver.observe(el));

/* ===== FAQ ACCORDION ===== */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ===== INSTAGRAM FLOAT — show after 1.5s ===== */
setTimeout(() => {
  const floatEl = document.getElementById('insta-float');
  if (floatEl) floatEl.classList.add('show');
}, 1500);

/* ===== MOBILE MENU ===== */

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', () => {

  mobileMenu.classList.add('active');

});

closeMenu.addEventListener('click', () => {

  mobileMenu.classList.remove('active');

});

/* CLOSE MENU WHEN CLICKING LINK */

document.querySelectorAll('.mobile-menu a').forEach(link => {

  link.addEventListener('click', () => {

    mobileMenu.classList.remove('active');

  });

});

/* ===== NAVBAR SHOW/HIDE ===== */

const navbar = document.getElementById('navbar');

let lastScroll = 0;

window.addEventListener('scroll', () => {

  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {

    navbar.classList.remove('hide');

    return;

  }

  if (
    currentScroll > lastScroll &&
    currentScroll > 120
  ) {

    navbar.classList.add('hide');

  } else {

    navbar.classList.remove('hide');

  }

  lastScroll = currentScroll;

});
