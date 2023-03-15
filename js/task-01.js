const categoriesLiEl = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesLiEl.length);

categoriesLiEl.forEach(element => {
  console.log('Category: ', element.firstElementChild.textContent);
  console.log('Elements: ', element.lastElementChild.children.length);
});
