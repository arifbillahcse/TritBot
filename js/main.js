// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks?.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Sticky nav shadow
window.addEventListener('scroll', () => {
  const header = document.querySelector('.nav-header');
  header?.classList.toggle('scrolled', window.scrollY > 10);
});

// Contact form submit (no-op placeholder)
document.querySelector('.contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Message sent!';
  btn.disabled = true;
});
