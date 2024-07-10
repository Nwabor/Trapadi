// // app/assets/javascripts/custom.js

// function showImage(imageClass) {
//     // Hide all images
//     document.querySelectorAll('.img-overlay').forEach(img => img.style.display = 'none');

//     // Show the hovered image
//     const imgToShow = document.querySelector(`.${imageClass}.img-overlay`);
//     if (imgToShow) {
//         imgToShow.style.display = 'block';
//     } else {
//         console.error(`No image found with class: ${imageClass}`);
//     }
// }

// // Add event listeners
// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.primary-text span').forEach(span => {
//         span.addEventListener('mouseover', function () {
//             const spanClass = span.className.split(' ')[0];
//             console.log(`Hovering over span with class: ${spanClass}`); // Debugging
//             showImage(spanClass);
//         });
//     });
// });