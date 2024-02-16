import { optionsTemplate } from "../templates/optionsTemplate.js"
import { searchRecipesBy } from "./search.js"

export const getInputSuggestions = (App) => {
    const input = document.querySelector("#text-search-form input")
    input.addEventListener("keyup", () => {
        console.log("input change", input.value)
        for (let i = 0; i < 3; i++) {
            App.selectedButtons[Object.keys(App.options)[i]].forEach(button => {
                searchRecipesBy(Object.keys(App.options)[i], button, App)
            })
        }
        App.searchedRecipes = App.searchedRecipes.length === 0 && App.recipes
        App.searchedRecipes = App.recipes.filter(recipe => recipe.searchKeyWords.toLowerCase().includes(input.value.toLowerCase()))
        
        let suggestion = '';
        if (input.value != '') {
                    App.$recipesWrapper.innerHTML = ""
                    App.options = {
                        'ingredients': [],
                        'appliances': [],
                        'ustensils': []
                    }
                    
                    App.displayAllRecipes(App.searchedRecipes)
                    App.$totalRecipes.textContent = App.searchedRecipes.length
                    App.searchedRecipes.length === 1 ? document.querySelector('.total-recipes + span').textContent = 'recette' : document.querySelector('.total-recipes + span').textContent = 'recettes' 
                    
                    App.searchedRecipes.forEach(recipe => {
                suggestion += `<div class="suggestion w-wull hover:bg-slate-500 flex flex-row">
                                    <p>${recipe.name}</p>
                                </div>`
            })
        } else {
            App.$recipesWrapper.innerHTML = ""
            App.displayAllRecipes(App.recipes)
              
            App.$totalRecipes.textContent = App.recipes.length
            document.querySelector('.total-recipes + span').textContent = 'recettes'
        }

        const sugg = document.querySelector("#suggestions")
        sugg.innerHTML = suggestion
    })
}