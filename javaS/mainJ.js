 // JavaScript to toggle the share options
 const shareIcon = document.querySelector('.share-icon');
 const shareOptions = document.querySelector('.share-options');
 const shareIcn = document.querySelector('.share-icn');

 shareIcon.addEventListener('mouseover', function() {
    shareOptions.style.display = 'block'
 });
 shareIcon.addEventListener('click', function() {
    shareOptions.style.display = 'none'
 });
//  shareIcn.addEventListener('click', function() {
//     shareOptions.style.display = 'block'
//  });
 shareIcn.addEventListener('click', function() {
    shareOptions.style.display = 'none'
 });


//  // Close the share options when clicking outside
//  document.addEventListener('click', (event) => {
//    if (!shareIcon.contains(event.target) && !shareOptions.contains(event.target)) {
//      shareOptions.classList.remove('active');
//    }
//  });