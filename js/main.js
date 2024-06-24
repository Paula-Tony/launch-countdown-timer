let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  let dataNow = new Date().getTime();

  let dataDiff = countDownDate - dataNow;

  if (dataDiff <= 0) {
    clearInterval(counter);
  }

  let days = Math.floor(dataDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dataDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dataDiff % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}, 1000);
