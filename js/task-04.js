const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

function updateValue(event) {
  counterValue = event;
  valueEl.textContent = counterValue;
}

incrementBtn.addEventListener('click', () => {
  updateValue((counterValue += 1));
});

decrementBtn.addEventListener('click', () => {
  updateValue((counterValue -= 1));
});
