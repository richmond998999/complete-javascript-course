import axios from 'axios';
import { key } from '../config';

 export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            // const res = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            const res = await this.getSample();
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            console.log(error);
            alert('Something went wrong :(');
        }
    };

    calcTime() {
        const numImg = this.ingredients.length;
        const periods = Math.ceil(numImg / 3);
        this.time = periods * 15;
    };

    calcServings () {
        this.servings = 4;
    };

    getSample() {
        const getResultPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(JSON.parse(`{"data": {"recipe": {"publisher": "101 Cookbooks", "f2f_url": "http://food2fork.com/view/47746", "ingredients": ["4 1/2 cups (20.25 ounces) unbleached high-gluten, bread, or all-purpose flour, chilled", "1 3/4 (.44 ounce) teaspoons salt", "1 teaspoon (.11 ounce) instant yeast", "1/4 cup (2 ounces) olive oil (optional)", "1 3/4 cups (14 ounces) water, ice cold (40F)", "Semolina flour OR cornmeal for dusting"], "source_url": "http://www.101cookbooks.com/archives/001199.html", "recipe_id": "47746", "image_url": "http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg", "social_rank": 100.0, "publisher_url": "http://www.101cookbooks.com", "title": "Best Pizza Dough Ever"}}}`))
            }, 2000);
        });
        return getResultPromise;
    }
 }


