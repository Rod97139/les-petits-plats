import { recipes } from "../../data/recipes.js"
import { recipesTemplate } from "./templates/recipesTemplate.js"
import { optionsTemplate } from "./templates/optionsTemplate.js"

import { compareAndAddRecipesArg } from "./utils/options.js"



class App {

    constructor() {
        this.recipes = recipes
        this.searchedRecipes = []
        this.options = {
            'ingredients': [],
            'appliances': [],
            'ustensils': []
        }
        this.$recipesWrapper = document.querySelector('.recipes-wrapper')
    }

    async displayAllRecipes(recipes) {
        recipes.forEach(recipe => {
            const recipeCard = recipesTemplate(recipe, this).getRecipesCardDOM()
            this.$recipesWrapper.appendChild(recipeCard)
            compareAndAddRecipesArg('appliances', recipe.appliance, this)
            recipe.ustensils.forEach(ustensil => {
                compareAndAddRecipesArg('ustensils', ustensil, this)
            })
        })
        for (let i = 0; i < 3; i++) {
            //creation des Input checkbox dans le DOM
            optionsTemplate(Object.keys(this.options)[i], this).putOptionInputDOM()
        }
    }

    async main() {
        this.displayAllRecipes(this.recipes)
        // checkBoxFormListener(this)
    }
}

const app = new App()
app.main()