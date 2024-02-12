 export const compareAndAddRecipesArg = async (type, arg, App) => {
    arg = arg.toLowerCase()
    switch (type) {
        case 'ingredient':
                App.options.ingredients.indexOf(arg) === -1 && App.options.ingredients.push(arg)
            break;
        case 'appliance':
                App.options.appliances.indexOf(arg) === -1 && App.options.appliances.push(arg)             
            break;
        case 'ustensil':
                App.options.ustensils.indexOf(arg) === -1 && App.options.ustensils.push(arg)
            break;
        default:
            break;
    }

}