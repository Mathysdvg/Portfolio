// Navbar scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20);
});

// Burger menu
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');
burger?.addEventListener('click', () => navLinks?.classList.toggle('open'));

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// Skill bars
const fills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.style.width = el.dataset.width;
      skillObserver.unobserve(el);
    }
  });
}, { threshold: 0.3 });
fills.forEach(f => skillObserver.observe(f));

// Active nav link
const links = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
links.forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});
