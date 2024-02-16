export const searchRecipesByIngredients = (type, value, App) => {
   const selectedRecipes = App.searchedRecipes.filter(recipe => 
    recipe[type].some(ingredient => 
        ingredient.ingredient.includes(value)
    ));
    return selectedRecipes;
}

export const searchRecipesByAppliances = (type, value, App) => {
    const newType = type.substring(0, type.length - 1);
    const selectedRecipes = App.searchedRecipes.filter(recipe => 
        recipe[newType].includes(value)
    );
    return selectedRecipes;
}

export const searchRecipesByUstensils = (type, value, App) => {
    const selectedRecipes = App.searchedRecipes.filter(recipe => 
        recipe[type].some(ustensil => 
            ustensil.toLowerCase().includes(value)
        ));
    return selectedRecipes;
}

export const searchRecipesBy = (type, value, App) => {
   if (App.searchedRecipes.length === 0) {
    App.searchedRecipes = App.recipes
   }
    let selectedRecipes = []
    switch (type) {
        case 'ingredients':
            selectedRecipes = searchRecipesByIngredients(type, value, App)
            break;
        case 'appliances':
            selectedRecipes = searchRecipesByAppliances(type, value, App)
            break;
        case 'ustensils':
            selectedRecipes = searchRecipesByUstensils(type, value, App)
            break;
        default:
             console.log('probleme dans la recherche');
    }

    App.searchedRecipes = selectedRecipes
    App.$recipesWrapper.innerHTML = ""
    App.options = {
        'ingredients': [],
        'appliances': [],
        'ustensils': []
    }
    App.displayAllRecipes(App.searchedRecipes)
    return selectedRecipes;
}