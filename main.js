const button = document.querySelector('#btn');
const body = document.querySelector('body');
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 
const value = document.querySelector('.hexValue');

button.addEventListener('click', changeHex);

function changeHex(){
  // for(let i = 0; i < colors.length; i++){
  //   console.log(colors[1]);   
  //   body.style.backgroundColor = colors[i];
  // }
  let hex = '#';

  for(let i = 0; i < 6; i++){
    const index = Math.floor(Math.random() * hexValues.length)
    hex += hexValues[index];
  }

  value.textContent = hex;
  body.style.backgroundColor = hex;

  // let colorIndex = Math.floor(Math.random() * 6 + 1);
  // body.style.backgroundColor = colors[colorIndex];
}