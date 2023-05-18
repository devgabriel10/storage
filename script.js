//Requisitos 1 a 3

const body = document.querySelector('body');
const paleta = document.getElementById('color-palette');
const button = document.querySelector('button');

const createColors = () => {
  for (let index = 0; index < 4; index += 1){
    const color = document.createElement('li');
    paleta.appendChild(color);

    if (index == 0) {
      color.className = 'color black';
    }
    if (index == 1) {
      color.className = 'color blue';
    }
    if (index == 2) {
      color.className = 'color green';
    }
    if (index == 3) {
      color.className = 'color red';
    }
  }
};

createColors();

//Requisito 4

let objColors = {
  1: 'color blue',
  2: 'color green',
  3: 'color red',
  4: 'color purple',
  5: 'color yellow',
  6: 'color orange',
  7: 'color pink',
  8: 'color brown'
};

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const randomColors = () => {
  button.addEventListener('click', () => {
    let colors = document.querySelectorAll('li');

     for (let index = 1; index < colors.length; index += 1) {
      let n = getRandomArbitrary(1, 9);
      for (let keys in objColors) {
        if (n == keys) {
          let color = objColors[keys];
          colors[index].className = color;
        }
      }
     }
  })
};

randomColors();

// Requisito 5: 

 const storageColors = () => {
 
};  

storageColors();
