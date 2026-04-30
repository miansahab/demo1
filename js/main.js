const nav = document.getElementById('nav');
const revealEls = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16 });

revealEls.forEach(el => observer.observe(el));
