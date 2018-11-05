import Search from './models/Search';

/** GLobal state of the app
 *  - Search object
 *  - Current recipt object
 *  - Shopping list object
 *  - Liked recipes
 */
const state = {}

document.querySelector('.search').addEventListener('submit', e => {

});

const search = new Search('pizza');
console.log(search);
// search.getResults();
