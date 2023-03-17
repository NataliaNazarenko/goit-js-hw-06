const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.trim() === '') {
    return spanEl.textContent;
  }
  spanEl.textContent = event.currentTarget.value;
}
