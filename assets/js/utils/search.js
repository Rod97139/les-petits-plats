export const searchRecipesByIngredients = (type, value, App) => {
   const selectedRecipes = App.recipes.filter(recipe => 
    recipe[type].some(ingredient => 
        ingredient.ingredient.includes(value)
    ));
    return selectedRecipes;
}

export const searchRecipesByAppliances = (type, value, App) => {
    const newType = type.substring(0, type.length - 1);
    const selectedRecipes = App.recipes.filter(recipe => 
        recipe[newType].includes(value)
    );
    return selectedRecipes;
}

export const searchRecipesByUstensils = (type, value, App) => {
    const selectedRecipes = App.recipes.filter(recipe => 
        recipe[type].some(ustensil => 
            ustensil.includes(value)
        ));
    return selectedRecipes;
}

export const searchRecipesBy = (type, value, App) => {
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
            selectedRecipes = App.recipes
    }

    console.log("selectedRecipes", selectedRecipes);
    return selectedRecipes;
}