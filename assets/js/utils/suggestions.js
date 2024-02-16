import { searchRecipesBy } from "./search.js"

export const getInputSuggestions = (App) => {
    const input = document.querySelector("#text-search-form input")
    input.addEventListener("keyup", () => {
        let isTagEnabled = false
        console.log("input change", input.value)
        console.log(App.selectedButtons, 'App.selectedButtons');
        App.searchedRecipes = App.recipes
        for (let i = 0; i < 3; i++) {
            App.selectedButtons[Object.keys(App.options)[i]].forEach(button => {
                isTagEnabled = true
                searchRecipesBy(Object.keys(App.options)[i], button, App)
                console.log(Object.keys(App.options)[i].length, 'Object.keys(App.options)[i].length');
            })
        }
        App.searchedRecipes = isTagEnabled ? App.searchedRecipes : App.recipes
        console.log(App.searchedRecipes, 'App.searchedRecipes');
        App.searchedRecipes = App.searchedRecipes.filter(recipe => recipe.searchKeyWords.toLowerCase().includes(input.value.toLowerCase()))
        
        
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

            let isTagEnabled = false
            
            App.searchedRecipes = App.recipes
            for (let i = 0; i < 3; i++) {
                App.selectedButtons[Object.keys(App.options)[i]].forEach(button => {
                    isTagEnabled = true
                    searchRecipesBy(Object.keys(App.options)[i], button, App)
                    console.log(Object.keys(App.options)[i].length, 'Object.keys(App.options)[i].length');
                })
            }

            App.searchedRecipes = isTagEnabled ? App.searchedRecipes : App.recipes

            App.$recipesWrapper.innerHTML = ""
            App.displayAllRecipes(App.searchedRecipes)
              
            App.$totalRecipes.textContent = App.searchedRecipes.length
            document.querySelector('.total-recipes + span').textContent = 'recettes'
        }

        const sugg = document.querySelector("#suggestions")
        sugg.innerHTML = suggestion
    })
}