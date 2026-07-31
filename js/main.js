document.addEventListener('DOMContentLoaded', () => {
  // footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // nav background on scroll
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // mobile nav sheet
  const navToggle = document.getElementById('navToggle');
  const navSheet = document.getElementById('navSheet');
  if (navToggle && navSheet) {
    navToggle.addEventListener('click', () => {
      navSheet.classList.toggle('open');
    });
    navSheet.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navSheet.classList.remove('open'));
    });
  }

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));

  // area cards accordion
  document.querySelectorAll('.area-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.area-card');
      const isOpen = card.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });
});
