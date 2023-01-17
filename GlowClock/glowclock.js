function glowClocksGears() {
  // hh - hour hand
  const hh = document.getElementById("hh");
  const mh = document.getElementById("mm");
  const sh = document.getElementById("ss");
  
  // hd - hour dot
  const hd = document.querySelector(".hr_dot");
  const md = document.querySelector(".min_dot");
  const sd = document.querySelector(".sec_dot");
  
  // ht - hour text 
  const ht = document.getElementById("hrTxt");
  const mt = document.getElementById("minTxt");
  const st = document.getElementById("secTxt");
  const ampm = document.getElementById("ampm");

  let date = new Date();
  let [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()];

  hh.style.strokeDashoffset = 510 - (510 * (h % 12)) / 12;
  mh.style.strokeDashoffset = 630 - (630 * m) / 60;
  sh.style.strokeDashoffset = 760 - (760 * s) / 60;

  sd.style.rotate = `${s * 6}deg`; // 360deg/60sec = 6 deg/sec
  md.style.rotate = `${m * 6}deg`; 
  hd.style.rotate = `${h * 30}deg`; // 360deg/12hr = 30deg/hr

  ampm.innerHTML = h >= 12 ? 'PM' : 'AM';
  h = h > 12 ? h - 12 : h;
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  ht.innerHTML = h;
  mt.innerHTML = m;
  st.innerHTML = s;
}
setInterval(() => glowClocksGears())