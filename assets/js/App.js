import { recipes } from "../../data/recipes.js"
import { recipesTemplate } from "./templates/recipesTemplate.js"



class App {

    constructor() {
        this.recipes = recipes
        this.totalRecipes = this.recipes.length
        this.selectedRecipes = []
        this.totalSelectedRecipes = this.selectedRecipes.length
        this.$recipesWrapper = document.querySelector('.recipes-wrapper')
    }

    async displayRecipes(recipes) {
        recipes.forEach(recipe => {
            const recipeCard = recipesTemplate(recipe).getRecipesCardDOM()
            this.$recipesWrapper.appendChild(recipeCard)
        })
    }

    async main() {
        this.displayRecipes(this.recipes)
    }
}

const app = new App()
app.main()