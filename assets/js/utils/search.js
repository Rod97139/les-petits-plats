export const searchRecipes = (type, value, App) => {
   const selectedRecipes = App.recipes.filter(recipe => 
    recipe['ingredients'].some(ingredient => 
        ingredient.ingredient.includes(value)
    ));
return selectedRecipes;





}