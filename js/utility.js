function createBoxElement() {
  const box = document.createElement('div');
  box.classList.add('box');
  return box;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }