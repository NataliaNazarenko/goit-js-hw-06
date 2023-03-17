const refs = {
  controlsEl: document.getElementById('controls'),
  input: document.querySelector('[type="number"]'),
  boxesEl: document.getElementById('boxes'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
};

let amount = 0;
let makeDiv = document.createElement('div');

refs.input.addEventListener('input', event => {
  amount = event.currentTarget.value;
  console.log(amount);
});

refs.btnDestroy.addEventListener('click', () => {
  destroyBoxes();
});

refs.btnCreate.addEventListener('click', () => {
  let makeDiv = document.createElement('div');
  makeDiv.style.width = `${30}px`;
  makeDiv.style.height = `${30}px`;
  makeDiv.style.backgroundColor = getRandomHexColor();
  refs.boxesEl.append(makeDiv);
  console.log(makeDiv);
});

function createBoxes(amount) {
  makeDiv *= amount;
  console.log(makeDiv);
}

function destroyBoxes() {
  refs.boxesEl.remove();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
