// Show message on button click
document.getElementById('showMessage').addEventListener('click', function() {
   const message = document.getElementById('message');
   message.classList.remove('hidden');
 });
 
 // Generate floating hearts
 const heartsContainer = document.querySelector('.hearts-container');
 
 function createHeart() {
   const heart = document.createElement('span');
   heart.style.left = Math.random() * 100 + 'vw';
   heart.style.animationDuration = Math.random() * 3 + 2 + 's';
   heart.style.width = Math.random() * 20 + 10 + 'px';
   heart.style.height = heart.style.width;
   heartsContainer.appendChild(heart);
 
   setTimeout(() => {
     heart.remove();
   }, 5000);
 }
 
 setInterval(createHeart, 300);