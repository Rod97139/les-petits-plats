import { optionsTemplate } from "../templates/optionsTemplate.js"

export const getInputSuggestions = (App) => {
    const input = document.querySelector("#text-search-form input")
    input.addEventListener("keyup", () => {
        console.log("input change", input.value)
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
                    
                    App.searchedRecipes.forEach(recipe => {
                suggestion += `<div class="suggestion w-wull hover:bg-slate-500 flex flex-row">
                                    <p>${recipe.name}</p>
                                </div>`
            })
        } else {
            App.$recipesWrapper.innerHTML = ""
            App.displayAllRecipes(App.recipes)
        }

        const sugg = document.querySelector("#suggestions")
        sugg.innerHTML = suggestion
    })
}