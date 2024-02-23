
const categoriesList = document.querySelectorAll(`.item`);
const numberOfCategories = categoriesList.length;

console.log(`Number of categories: ${numberOfCategories}`);

categoriesList.forEach(item => {
    const categoriesTitle = item.querySelector(`h2`);

    console.log(`Category: ${categoriesTitle.textContent}`);

    const itemsCategories = item.querySelectorAll(`li`);
    const numberOfItemsCategories = itemsCategories.length;

    console.log(`Elemens: ${numberOfItemsCategories}`);
});

