// Function to fetch a random image from Unsplash API
function fetchRandomImage(imageElement) {
    return fetch('https://source.unsplash.com/random/')
        .then(response => {
            const imageUrl = response.url;
            imageElement.src = imageUrl;
        })
        .catch(error => console.error('Error fetching image:', error));
}

// Call the function to fetch and display random images from the Unsplash API
window.onload = function() {
    const images = document.querySelectorAll('.image');
    images.forEach(image => {
        fetchRandomImage(image);
    });
};
 // Get all elements with class lightbox-trigger
 const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
 const lightboxOverlay = document.getElementById('lightboxOverlay');
 const lightboxImage = document.getElementById('lightboxImage');
 const closeButton = document.querySelector('.close-button');

 // Add click event listener to each lightbox trigger
 lightboxTriggers.forEach(trigger => {
     trigger.addEventListener('click', () => {
         // Display lightbox overlay
         lightboxOverlay.style.display = 'flex';

         // Set lightbox image src to clicked image src
         lightboxImage.src = trigger.src;
     });
 });

 // Add click event listener to close button
 closeButton.addEventListener('click', () => {
     // Hide lightbox overlay
     lightboxOverlay.style.display = 'none';
 });

 // Close lightbox when clicking outside of image
 lightboxOverlay.addEventListener('click', (event) => {
     if (event.target === lightboxOverlay) {
         lightboxOverlay.style.display = 'none';
     }
 });