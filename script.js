document.querySelector('.jump-button').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default jump behavior
    const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
    const targetElement = document.getElementById(targetId); // Find the target element
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth' // Use smooth scrolling behavior
      });
    }
  });