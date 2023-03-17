const refs = {
  controlsEl: document.getElementById('controls'),
  input: document.querySelector('[type="number"]'),
  boxesEl: document.getElementById('boxes'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
};

refs.input.addEventListener('input', onInputChange);
refs.btnCreate.addEventListener('click', createBoxes);
// refs.btnDestroy.addEventListener('click', getRandomHexColor);

// refs.btnCreate.addEventListener('click', () => {
//   document.body.style.backgroundColor = getRandomHexColor();
//   spanColor.textContent = getRandomHexColor();
// });
function onInputChange(event) {
  let makeDiv = `<div></div>`;
  refs.boxesEl.insertAdjacentHTML('beforeend', makeDiv);
  console.log(refs.boxesEl);
}

function createBoxes(amount) {
  console.log(amount);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
