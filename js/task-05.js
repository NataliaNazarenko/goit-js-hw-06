const inputEl = document.getElementById('name-input');
const titleEl = document.getElementById('name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === '') {
    titleEl.textContent = 'Anonymous';
  }
  titleEl.textContent = event.currentTarget.value;
}
