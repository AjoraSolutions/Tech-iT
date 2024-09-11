// Get elements
const hamburger = document.querySelector('.hamberger');
const cross = document.querySelector('.cross');
const sidebar = document.getElementById('sidebar');

// Toggle the sidebar on click
hamburger.addEventListener('click', function() {
  sidebar.classList.toggle('active');

});

cross.addEventListener('click', function(){
  sidebar.classList.remove('active')
})