 export const compareAndAddRecipesArg = async (type, arg, App) => {
    const lowArg = arg.toLowerCase()
   App.options[type].indexOf(lowArg) === -1 && App.options[type].push(lowArg)
}