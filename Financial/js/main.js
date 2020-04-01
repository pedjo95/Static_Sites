// Initialize and add the map
function initMap() {
  // My location
  const loc = {lat: 42.361145, lng:-71.057083}
  // Center map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({position: loc, map: map});
}

// // Sticky menu background
// window.addEventListener('scroll', function() {
//   if (window.scrollY > 150) {
//     document.querySelector('#navbar').style.opacity = 0.9;
//   } else {
//     this.document.querySelector(#navbar).style.opacity = 1;
//   }
// });