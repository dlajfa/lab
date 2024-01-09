const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const dateEl = document.getElementById('date');

showTime();
setInterval(showTime, 1000);

function showTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  hoursEl.innerText = format(hours);
  minutesEl.innerText = format(minutes);
  secondsEl.innerText = format(seconds);

  dateEl.innerText = `${year}-${format(month)}-${format(day)}`;
}

function format(count) {
  return count.toString().padStart(2, '0');
}
