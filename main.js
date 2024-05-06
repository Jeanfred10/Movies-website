// Ensure the DOM content is loaded before executing JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  // Select the header element
  let header = document.querySelector('header');

  // Add scroll event listener to the window
  window.addEventListener('scroll', () => {
      header.classList.toggle('shadow', window.scrollY > 0);
  });

  // Select the menu icon and the navbar
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  // Add click event listener to the menu icon
  menuIcon.addEventListener('click', function() {
      navbar.classList.toggle('active');
  });

  // Initialize Swiper for the home section
  var homeSwiper = new Swiper(".home", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      }
  });

  // Initialize Swiper for the song section
  var songSwiper = new Swiper(".song-container", {
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      },
      breakpoints: {
          0: {
              slidesPerView: 2,
          },
          568: {
              slidesPerView: 3,
          },
          768: {
              slidesPerView: 4,
          },
          968: {
              slidesPerView: 5,
          }
      }
  });
});
// Function to toggle navbar visibility
function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("show");
}
