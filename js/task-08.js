const form = document.querySelector('.login-form');
const btn = document.querySelector('.submit');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = { email, password };

  if (email === '' || password === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(formData);
  event.currentTarget.reset();
}
