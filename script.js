// JavaScript para manejar la interacción de la barra de navegación
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const sectionId = link.getAttribute('href').substring(1);
          alert(`Has hecho clic en el enlace hacia la sección "${sectionId}"`);
      });
  });
});