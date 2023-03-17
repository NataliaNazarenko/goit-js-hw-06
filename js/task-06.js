const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', onInputBlur);
inputEl.attributes;

function onInputBlur(event) {
  if (event.currentTarget.value.trim().length !== Number(inputEl.getAttribute('data-length'))) {
    return inputEl.classList.add('invalid');
  } else {
    return inputEl.classList.add('valid');
  }
}
