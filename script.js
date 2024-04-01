let hoursPassed = 0;
let minutesPassed = 0;
let secondsPassed = 0;

function updateTime() {
  secondsPassed++;
  if (secondsPassed >= 60) {
    secondsPassed = 0;
    minutesPassed++;
    if (minutesPassed >= 60) {
      minutesPassed = 0;
      hoursPassed++;
      if (hoursPassed >= 24) {
        hoursPassed = 0;
      }
    }
  }

  const hours = String(hoursPassed).padStart(2, '0');
  const minutes = String(minutesPassed).padStart(2, '0');
  const seconds = String(secondsPassed).padStart(2, '0');
  
  document.querySelector('.hour').textContent = hours;
  document.querySelector('.minute').textContent = minutes;
  document.querySelector('.second').textContent = seconds;
}

// Update time every second
setInterval(updateTime, 1000);



  
  