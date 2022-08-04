function changePercentage(buttonElement) {
    let ithElement = buttonElement.id[buttonElement.id.length - 1];
    const inputBox = document.getElementById(`changerbox-${ithElement}`);
    let newPercent = parseInt(inputBox.value) || 0;

    //* For Valid input
    if(newPercent > 100) {
        newPercent = 100;
        inputBox.value = 100;
        inputBox.style.borderBottom = "2px solid gold";
    } else {
        inputBox.style.borderBottom = "2px solid red";
    }

    //* Change percentage text 
    const numberDiv = document.getElementById(`number-card${ithElement}`);
    numberDiv.innerHTML = `<h2>${newPercent}<span>%</span></h2>`;

    //* change the progress bar
    const filledCircle = document.getElementById(`filledCircle-card${ithElement}`);
    filledCircle.style.strokeDashoffset = `calc(440px - (440px * ${newPercent}) / 100)`;
}