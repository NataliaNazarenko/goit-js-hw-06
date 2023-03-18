const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  spanEl.style.fontSize = event.currentTarget.value + 'px';
}
