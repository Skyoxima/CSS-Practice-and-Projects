let img = document.querySelector('.imgBox img');
let colorSpans = document.querySelectorAll('.color span');
let card = document.querySelector('.card');

colorSpans.forEach((spanItem) => spanItem.addEventListener('click', e => {
    let toColor = e.target.className;
    
    if(toColor === 'green') {
        img.style.filter = 'hue-rotate(0deg)';
        card.style.setProperty('--beforeBgColor', '#9bdc28');
    } else if(toColor === 'blue') {
        img.style.filter = 'hue-rotate(120deg)';
        card.style.setProperty('--beforeBgColor', '#03a9f4');
    } else {
        img.style.filter = 'hue-rotate(270deg) brightness(0.9) saturate(1.5)';
        card.style.setProperty('--beforeBgColor', '#e91e63');
    }
}))

// above is the only way to access CSS of pseudoelements, i.e by using variables