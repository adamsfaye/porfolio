
 
  const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav .col-6');

// Cacher le menu par défaut sur mobile
if (window.innerWidth <= 768) {
  navLinks.style.display = 'none';
}

// Quand on clique sur le hamburger
hamburger.addEventListener('click', () => {
  if (navLinks.style.display === 'none' || navLinks.style.display === '') {
    navLinks.style.display = 'block';
    navLinks.style.textAlign = 'center';
    navLinks.style.background = '#fff';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.right = '10px';
    navLinks.style.padding = '15px';
    navLinks.style.borderRadius = '8px';
    navLinks.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
  } else {
    navLinks.style.display = 'none';
  }
});

