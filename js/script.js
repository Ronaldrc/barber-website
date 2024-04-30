 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      var targetId = this.getAttribute('href');
      console.log(targetId);
      var targetElement = document.querySelector(targetId);
      
      if (targetElement) {
          var topbarHeight = document.querySelector('.topbar').offsetHeight; // Get the topbar height
          
          // Calculate target position, accounting for topbar height
          var scrollTargetPosition = targetElement.offsetTop - topbarHeight;
          
          window.scrollTo({
              top: scrollTargetPosition,
              behavior: 'smooth'
          });
      }
  });
});

// Clicks on hamburger menu collapses dropdown menu
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const topbarNav = document.getElementById('topbar-nav');
  console.log("hamburger menu pressed");
  hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      topbarNav.classList.toggle('show');   // Use 'show' to control the display of topbar-nav
  });
});

// Display topbar once the window is enlarged
window.addEventListener('resize', function() {
  const topbarNav = document.getElementById('topbar-nav');
  if (window.innerWidth >= 1000) {   // Match the breakpoint from your CSS - original was >= 768
      topbarNav.classList.remove('show');   // Remove 'show' class that might have been added
      // Hide hamburger menu if it was toggled
      document.getElementById('hamburger').classList.remove('active');
  }
});

// Fade-in home page
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
      document.getElementById('home').style.opacity = 1;
  }, 0); // Delay in ms before the function is run
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  var totalSlides = slides.length; // Get the total number of slides
  var slideNumberText = document.getElementById("slide-number");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  // Update the text with current slide number
  slideNumberText.innerHTML = slideIndex + ' / ' + totalSlides;
}

