let btn = document.querySelector('#bgchanger');
let colorValue = document.querySelector('#colorValue');
let colorsHex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener('click', ()=> {
    let hex = '#';
    
    for (let i = 0; i < 6; i++){
        const index = Math.floor(Math.random()*colorsHex.length)
        hex += colorsHex[index];
    }

document.body.style.backgroundColor = hex;
colorValue.innerHTML = hex;
});