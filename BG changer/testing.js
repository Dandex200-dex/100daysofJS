let btn = document.querySelector('#bgchanger');
let colors = ['mediumseagreen', 'orange', 'gray', 'navy', 'crimson', 'teal'];
btn.addEventListener('click', ()=> {
let randomizedColors = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundColor = randomizedColors;
});