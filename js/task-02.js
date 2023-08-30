const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const selectorIngredients = document.querySelector('#ingredients');


const createList = ingredients => {
  return ingredients.map(ingredient => {
    const itemList = document.createElement('li');
    itemList.classList = 'item';
    itemList.textContent = ingredient;

    return itemList;
  });
};

const elements = createList(ingredients);
selectorIngredients.append(...elements);