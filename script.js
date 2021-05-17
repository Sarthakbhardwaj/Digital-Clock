setInterval(() => {
  let a;
  let hrs;
  let min;
  let sec;
  a = new Date();
  hrs = a.getHours();
  min = a.getMinutes();
  sec = a.getSeconds();
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}, 1000);
