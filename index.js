
    document.addEventListener("DOMContentLoaded", function() {
        // Function to check if an element is in the viewport
        function isElementInViewport(elem) {
            var rect = elem.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
        }

        // Function to animate footer content when it's in the viewport
        function animateFooterContent() {
            var footerContent = document.querySelectorAll(".footer .flex-container");
            footerContent.forEach(function(elem) {
                if (isElementInViewport(elem)) {
                    elem.style.opacity = 1;
                    elem.style.transform = "translateY(0)";
                }
            });
        }

        // Initial check when the page loads
        animateFooterContent();

        // Check for animation on scroll
        window.addEventListener("scroll", function() {
            animateFooterContent();
        });
    });



// Function to add the .animate class when elements are in the viewport
// Function to add the .animate class when elements are in the viewport
function animateOnScroll() {
    const windowHeight = window.innerHeight;
    const chiefBody = document.querySelector('.chief_body');
    const chiefImg = document.querySelector('.chief_img');
  
    const chiefBodyTop = chiefBody.getBoundingClientRect().top;
    const chiefImgTop = chiefImg.getBoundingClientRect().top;
  
    if (chiefBodyTop < windowHeight) {
      chiefBody.classList.add('animate');
    }
  
    if (chiefImgTop < windowHeight) {
      chiefImg.classList.add('animate');
    }
  
    // Remove the scroll event listener once the animation is triggered for both elements
    window.removeEventListener('scroll', animateOnScroll);
  }
  
  // Add a scroll event listener to trigger the animation
  window.addEventListener('scroll', animateOnScroll);
  
  // Initial check to see if any elements are already in the viewport
  animateOnScroll();
  ;
  
// schedule////////////////////////////
// Function to add the .animate class when elements are in the viewport
// Function to add the .animate class when elements are in the viewport
function handleScroll() {
    const windowHeight = window.innerHeight;
  
    scheduleCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
  
      if (cardTop < windowHeight) {
        card.classList.add('animate');
      }
    });
  }
  
  // Get references to all .card elements inside .conv_schedule
  const scheduleCards = document.querySelectorAll('.conv_schedule .card');
  
  // Add a scroll event listener to trigger the animation when scrolling
  window.addEventListener('scroll', handleScroll);
  
  // Initial check to see if any elements are already in the viewport
  handleScroll();
  
  
 // Function to add the .animate class to cards when they are in the viewport
function animateDegreeCardsOnScroll() {
    const windowHeight = window.innerHeight;
    const degreeCards = document.querySelectorAll('.conv_Degreer .card');
  
    degreeCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
  
      if (cardTop < windowHeight) {
        card.classList.add('animate');
      }
    });
  }
  
  // Add a scroll event listener to trigger the animation when scrolling
  window.addEventListener('scroll', animateDegreeCardsOnScroll);
  
  // Initial check to see if any cards are already in the viewport
  animateDegreeCardsOnScroll();
  

//   vedio/////////////////////////

const videoId = 'bgGRj02g7qo';
const apiKey = 'AIzaSyBCdDUKVhEIVHkys69Jba48wy4ga0_hDRE'; // Replace with your YouTube Data API key

// Construct the YouTube Data API URL
const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

// Make an AJAX request to the YouTube Data API
$.ajax({
    url: apiUrl,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
        // Extract the video thumbnail URL
        const thumbnailUrl = data.items[0].snippet.thumbnails.high.url;

        // Set the src attribute of the thumbnail image
        const thumbnailImage = document.querySelector('.thumbnail');
        thumbnailImage.src = thumbnailUrl;
    },
    error: function(error) {
        console.error('Error fetching YouTube data: ', error);
    }
});