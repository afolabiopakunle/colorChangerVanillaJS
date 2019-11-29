let background = document.querySelector('.container');
let btn = document.querySelector('button');
let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
btn.addEventListener('click', changeColor);
function changeColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * keys.length);
        hexColor += keys[random];
    }
    background.style.backgroundColor = hexColor;
}