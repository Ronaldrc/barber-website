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

// When the user scrolls the page, execute createScrollSlider
// window.onscroll = function() {createScrollSlider()};

// function createScrollSlider() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.height = scrolled + "%";
// }
