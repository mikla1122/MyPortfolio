// Skill Bars Animation
document.querySelectorAll('.skill-bar').forEach(skillBar => {
    const percentage = skillBar.getAttribute('data-percentage');
    setTimeout(() => {
      skillBar.style.setProperty('--skill-percentage', percentage);
      skillBar.style.width = percentage;
    }, 500);
  });
  
  // Quote Slider
  const quotes = document.querySelectorAll('.quote');
  let currentQuoteIndex = 0;
  
  function showNextQuote() {
    quotes[currentQuoteIndex].classList.remove('active');
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quotes[currentQuoteIndex].classList.add('active');
  }
  
  setInterval(showNextQuote, 3000);
  
  // Initialize the first quote
  quotes[currentQuoteIndex].classList.add('active');
  