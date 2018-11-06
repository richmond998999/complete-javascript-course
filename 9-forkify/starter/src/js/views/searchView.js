import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
};

// 'Pasta with tomato with spinach'
/*
acc: 0 / acc + curr.length = 5 / newTitle = ['Pasta']
acc: 5 / acc + curr.length = 9 / newTitle = ['Pasta', 'with']
acc: 9 / acc + curr.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
acc: 15 / acc + curr.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
acc: 18 / acc + curr.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
*/
const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, curr) => {    // reduce method has an accumulator built in
            if (acc + curr.length <= limit) {
                newTitle.push(curr);
            }
            return acc + curr.length;
        }, 0);

        // return the result
        return `${newTitle.join(' ')} ...`;
    }
    return title;
};

const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);      // This will automatically pass each recipe to render recipe
};