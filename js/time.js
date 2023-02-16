let countDownDate = new Date("December 14, 2023 23:59:59").getTime();

let x = setInterval(() => {
  let now = new Date().getTime();
  let time = countDownDate - now;

  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);

  // console.log(days, hours, minutes, seconds);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // document.getElementsByClassName("day").innerHTML = days;
  // document.getElementsByClassName("hours").innerHTML = hours;
  // document.getElementsByClassName("minutes").innerHTML = minutes;
  // document.getElementsByClassName("seconds").innerHTML = seconds;
}, 1000);
