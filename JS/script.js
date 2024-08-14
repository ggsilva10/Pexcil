document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById("toggle-menu");
    var nav = document.getElementById("nav");
  
    toggle.addEventListener('click', function () {
      nav.classList.toggle('responsive');
    });
  });