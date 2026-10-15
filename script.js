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

// Création du surveillant (Observer)
const surveillant = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        // Si l'élément est visible à l'écran
        if (element.isIntersecting) {
            element.target.classList.add('visible'); // On lui ajoute la classe visible
        }
    });
}, {
    threshold: 0.15 // L'élément s'active quand 15% de sa surface est visible
});

// On dit au surveillant de surveiller toutes vos sections ou blocs de contenu
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
