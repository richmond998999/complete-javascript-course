import Search from './models/Search';
import * as searchView from './views/searchView'; // searchView will be the object that have all the variables of searchView 
import { elements } from './views/base';

/** GLobal state of the app
 *  - Search object
 *  - Current recipt object
 *  - Shopping list object
 *  - Liked recipes
 */
const state = {}


// Add async and await since getResult returns a promise and is asynchronous
const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();
    console.log(query);

    if (query) {
        // 2) New seach object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results

        // 4) Search for recipes
        // await state.search.getResults();
        await state.search.getResultTimeout();

        // 5) Render results on UI
        // console.log(state.search.result);
        searchView.renderResults(state.search.result);
    }
}


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});
