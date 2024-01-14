document.addEventListener('DOMContentLoaded', function () {
    const barIcon = document.querySelector('.bar_icon');
    const navbar = document.querySelector('.navbar');
  
    barIcon.addEventListener('click', function () {
      navbar.classList.toggle('show');
    });
  
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50;
  
      if (scrollPosition > scrollThreshold) {
        navbar.style.backgroundColor = 'your_desired_color';
      } else {
        navbar.style.backgroundColor = 'transparent';
      }
    });
  
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.navbar ul li a');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - navbar.offsetHeight,
          behavior: 'smooth'
        });
      });
    });
  
    // Image slideshow in the hero section
    const heroImages = [
      'images/hero_image1.jpg',
      'images/hero_image2.jpg',
      'images/hero_image3.jpg'
    ];
    const heroImageContainer = document.querySelector('.hero_image img');
    let currentImageIndex = 0;
  
    function changeHeroImage() {
      heroImageContainer.src = heroImages[currentImageIndex];
      currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    }
  
    
    setInterval(changeHeroImage, 5000);
  
    
  });