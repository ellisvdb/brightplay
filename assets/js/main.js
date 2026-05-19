// BrightPlay — small, progressive JS. No framework, no build step.
// Currently: mobile nav open/close + Escape to dismiss.

(function () {
  const toggle = document.querySelector('[data-nav-toggle]');
  const closeBtn = document.querySelector('[data-nav-close]');
  const nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;

  const open = () => {
    nav.dataset.open = 'true';
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
    // Focus the first link for keyboard users
    const firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus({ preventScroll: true });
  };

  const close = () => {
    nav.dataset.open = 'false';
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
    toggle.focus({ preventScroll: true });
  };

  toggle.addEventListener('click', () => {
    nav.dataset.open === 'true' ? close() : open();
  });
  if (closeBtn) closeBtn.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.dataset.open === 'true') close();
  });

  // Close when a nav link is activated (single-page feel on mobile)
  nav.addEventListener('click', (e) => {
    if (e.target.matches('a')) close();
  });
})();
