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
  if (window.innerWidth >= 768) {   // Match the breakpoint from your CSS
      topbarNav.classList.remove('show');   // Remove 'show' class that might have been added
      // Hide hamburger menu if it was toggled
      document.getElementById('hamburger').classList.remove('active');
  }
});

// When the user scrolls the page, execute createScrollSlider
// window.onscroll = function() {createScrollSlider()};

// function createScrollSlider() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.height = scrolled + "%";
// }
