// ============================================
// Zacharoodjo — Script simple
// ============================================

// Année automatique dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Header qui change au scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Apparition au scroll (depuis la gauche)
const surveillant = new IntersectionObserver((elements) => {
  elements.forEach(element => {
    if (element.isIntersecting) {
      element.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.anime-au-scroll').forEach(bloc => {
  surveillant.observe(bloc);
});

// Menu mobile
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('open');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('open');
  });
});
