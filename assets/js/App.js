import { recipes } from "../../data/recipes.js"
import { recipesTemplate } from "./templates/recipesTemplate.js"
import { optionsTemplate } from "./templates/optionsTemplate.js"

import { compareAndAddRecipesArg } from "./utils/options.js"
import { getInputSuggestions } from "./utils/suggestions.js"



class App {

    constructor() {
        this.recipes = recipes
        this.searchedRecipes = []
        this.options = {
            'ingredients': [],
            'appliances': [],
            'ustensils': []
        }
        this.selectedButtons = {
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
            recipe.appliance = recipe.appliance.toLowerCase()
            recipe.searchKeyWords = recipe.name + ' ' + recipe.description + ' ' + recipe.ingredients.map(ingredient => ingredient.ingredient).join(' ')
            compareAndAddRecipesArg('appliances', recipe.appliance, this)
            recipe.ustensils.forEach(ustensil => {
                ustensil = ustensil.toLowerCase()
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
        getInputSuggestions(this)
        console.log(this.recipes, 'this.recipes');
        // checkBoxFormListener(this)
    }
}

const app = new App()
app.main()