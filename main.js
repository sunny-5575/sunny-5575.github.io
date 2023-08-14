// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".fade-in");

  function checkAnimation() {
      animatedElements.forEach(element => {
          const bounding = element.getBoundingClientRect();
          if (bounding.top < window.innerHeight) {
              element.classList.add("show");
          }
      });
  }

  // Initial check when the page loads
  checkAnimation();

  // Check animation on scroll
  window.addEventListener("scroll", checkAnimation);
});

const aboutitem=document.getElementById('about')
aboutitem.addEventListener('click',(e)=>{
    alert('yes')
})