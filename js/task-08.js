const form = document.querySelector('.login-form');
const btn = document.querySelector('.submit');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = { email, password };

  if (email === '' || password === '') {
    const message = 'Please fill in all the fields!';
    return alert(message);
  }

  console.log(formData);
  event.currentTarget.reset();
}
