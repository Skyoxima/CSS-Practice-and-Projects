function glowClocksGear() {
  // hh - hour hand
  const hh = document.getElementById("hh");
  const mh = document.getElementById("mm");
  const sh = document.getElementById("ss");

  let date = new Date();
  let [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()];

  hh.style.strokeDashoffset = 510 - (510 * h) / 12;
  mh.style.strokeDashoffset = 630 - (630 * m) / 60;
  sh.style.strokeDashoffset = 760 - (760 * s) / 60;
}
setInterval(() => glowClocksGear())