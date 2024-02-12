 export const compareAndAddRecipesArg = async (type, arg, App) => {
    
   App.options[type].indexOf(arg) === -1 && App.options[type].push(arg)
}