function updateClock() {
  let now = new Date(); // current date and time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  // Add leading zeros if less than 10
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  // Display the time
  document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
}
setInterval(updateClock, 1000);
updateClock();
