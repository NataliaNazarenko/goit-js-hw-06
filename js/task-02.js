const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listUlEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const addLiEl = document.createElement('li');
  addLiEl.textContent = ingredient;
  addLiEl.classList.add('item');

  return addLiEl;
});

listUlEl.append(...elements);
console.log(elements);
