import { searchRecipesBy } from "./search.js"

export const deleteSearch = (App) => {
    const searchInput = document.querySelector('input[type="search"]')
    
    
        const container = searchInput.parentElement
        const deleteIcon = container.querySelector('.delete-text')

        searchInput.addEventListener('input', () => {
            if (searchInput.value !== '') {
                deleteIcon.classList.toggle('hidden', false)
            } else {
                deleteIcon.classList.toggle('hidden', true)
            }
        })

        deleteIcon.addEventListener('click', () => {
            searchInput.value = ''
            deleteIcon.classList.toggle('hidden', true)
            
            let isTagEnabled = false
            
            App.searchedRecipes = App.recipes
            for (let i = 0; i < 3; i++) {
                App.selectedButtons[Object.keys(App.options)[i]].forEach(button => {
                    isTagEnabled = true
                    searchRecipesBy(Object.keys(App.options)[i], button, App)
                })
            }

            App.searchedRecipes = isTagEnabled ? App.searchedRecipes : App.recipes

            App.$recipesWrapper.innerHTML = ""
            App.displayAllRecipes(App.searchedRecipes)
              
            App.$totalRecipes.textContent = App.searchedRecipes.length
            document.querySelector('.total-recipes + span').textContent = 'recettes'
        })
    }