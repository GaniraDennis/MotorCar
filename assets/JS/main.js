

document.body.style.backgroundImage = "url(./Assets/home background.jpg)";

document.body.style.backgroundImage = "url(./Assets/home background.jpg)";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";


document.body.classList.add('bg-image');

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
   
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    
  
    this.classList.add('active');
  });
});


