function toggleClass() {
    const body = document.querySelector('body');
    // console.log(body.classList);
    body.classList.toggle('light'); // add the 'light' class if it isn't there otherwise remove it if it's there
}

function setTime() {
    // console.log("Function Called"); // function is called only once, then the setInterval is running continuously 
    const deg = 6;
    const hr = document.querySelector('#hr');
    const min = document.querySelector('#min');
    const sec = document.querySelector('#sec');
    
    setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;
        // console.log(`${hh}:${mm}:${ss}`);
        hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
        min.style.transform = `rotateZ(${mm}deg)`;
        sec.style.transform = `rotateZ(${ss}deg)`;
        // rotateZ is equivalent to just rotate
    })
}
setTime(); // calling the function to have it exceuted
// initially the setTime function code was kept open but I felt like not keeping it open
// The function can also be called by "onload" in body tag