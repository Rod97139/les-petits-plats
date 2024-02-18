import { recipes } from "../../data/recipes.js"
import { recipesTemplate } from "./templates/recipesTemplate.js"
import { optionsTemplate } from "./templates/optionsTemplate.js"

import { compareAndAddRecipesArg } from "./utils/options.js"
import { getInputSuggestions } from "./utils/suggestions.js"
import { dropdown } from "./utils/dropdown.js"
import { deleteSearch } from "./utils/delete-search.js"



class App {

    constructor() {
        // this.newTagArray = 
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
        this.$totalRecipes = document.querySelector('.total-recipes')
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
        document.addEventListener("click", (event) => {
                const formCheckbox = document.querySelector("#filters")
                const dropdownUls = document.querySelectorAll('#filters ul')
                const parentTarget =  event.target.parentNode

                if (!formCheckbox.contains(event.target) && (parentTarget !== null) ) {
                    if (parentTarget.getAttribute('class') !== 'button-parent') {
                        dropdownUls.forEach(ul => {
                            const $container = ul.parentElement
                            const button = $container.querySelector('button')
                            if (!ul.classList.contains('hidden')) {
                                ul.classList.toggle('hidden')
                                $container.classList.toggle('max-h-[4.5rem]')
                                button.classList.toggle('open')                            
                            }
                        })
                    }
                }
        });

        const forms = document.querySelectorAll('form')
        forms.forEach(form => {
            form.addEventListener('submit', (event) => {
                event.preventDefault()
            })
        })
        this.displayAllRecipes(this.recipes)
        getInputSuggestions(this)
        dropdown()
        deleteSearch(this)
    }
}

const app = new App()
app.main()