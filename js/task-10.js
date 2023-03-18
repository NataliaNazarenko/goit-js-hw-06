const refs = {
  controlsEl: document.getElementById('controls'),
  input: document.querySelector('[type="number"]'),
  boxesEl: document.getElementById('boxes'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
};

refs.btnDestroy.addEventListener('click', destroyBoxes);

refs.btnCreate.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = refs.input.value;
  console.log(amount);
  const elementArr = [];
  let makeDiv = document.createElement('div');
  for (let index = 0; index < amount; index += 1) {
    makeDiv.style.width = `${30 + index * 10}px`;
    makeDiv.style.height = `${30 + index * 10}px`;
    makeDiv.style.backgroundColor = getRandomHexColor();
    elementArr.push(makeDiv);
  }
  refs.boxesEl.append(...elementArr);
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
