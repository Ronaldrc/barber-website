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

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////


var slideIndex = 0;
var slides = document.getElementsByClassName("mySlide");
var totalSlides = slides.length; // Get the total number of slides
var slideInterval = setInterval(function() { plusSlides(1); }, 5000); // Change slide every 3000 milliseconds

function plusSlides(n) {
  clearInterval(slideInterval); // Clear the current interval
  slideIndex += n;
  if (slideIndex > totalSlides - 1) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = totalSlides - 1; }
  showSlides();
  slideInterval = setInterval(function() { plusSlides(1); }, 5000); // Restart the interval
}

function showSlides() {
  var i;
  var slideNumberText = document.getElementById("slide-number");
  for (i = 0; i < totalSlides; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";
  // Update the text with the current slide number
  slideNumberText.innerHTML = (slideIndex + 1) + ' / ' + totalSlides;
}

// Treat entire instagram class as hyperlink using event listener
var instagram = document.querySelectorAll('.instagram');
instagram[0].addEventListener("click", function() {
  location.href = "https://instagram.com/deezy.clipz";
})

// Treat entire book-with-me class as hyperlink using event listener
var instagram = document.querySelectorAll('.book-with-me');
instagram[0].addEventListener("click", function() {
  location.href = "https://www.arthenticcuts.com/booking";
})

// Initial call to display the first slide
showSlides();
