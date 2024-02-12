import { recipes } from "../../data/recipes.js"
import { optionsTemplate, recipesTemplate } from "./templates/recipesTemplate.js"
import { compareAndAddRecipesArg } from "./utils/options.js"



class App {

    constructor() {
        this.recipes = recipes
        this.options = {
            ingredients: [],
            appliances: [],
            ustensils: []
        }
        this.$recipesWrapper = document.querySelector('.recipes-wrapper')
    }

    async displayRecipes(recipes) {
        recipes.forEach(recipe => {
            const recipeCard = recipesTemplate(recipe, this).getRecipesCardDOM()
            this.$recipesWrapper.appendChild(recipeCard)
            compareAndAddRecipesArg('appliance', recipe.appliance, this)
            recipe.ustensils.forEach(ustensil => {
                compareAndAddRecipesArg('ustensil', ustensil, this)
            })
        })
    }

    async displayOptions() {
        //fonctions async 
        optionsTemplate('ingredients', this).setOptionInputDOM()
        optionsTemplate('appliances', this).setOptionInputDOM()
        optionsTemplate('ustensils', this).setOptionInputDOM()
        
    }

    async main() {
        this.displayRecipes(this.recipes)
        this.displayOptions()
    }
}

const app = new App()
app.main()