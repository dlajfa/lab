const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

showTime();
setInterval(showTime, 1000);

function showTime() {
  const time = new Date();

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hoursEl.innerText = format(hours);
  minutesEl.innerText = format(minutes);
  secondsEl.innerText = format(seconds);
}

function format(count) {
  return count.toString().padStart(2, '0');
}