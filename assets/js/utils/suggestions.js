export const getInputSuggestions = (App) => {
    const input = document.querySelector("#text-search-form input")
    input.addEventListener("keyup", () => {
        console.log("input change", input.value)
        const result = App.recipes.filter(recipe => recipe.name.toLowerCase().includes(input.value.toLowerCase()))
        
        
        let suggestion = '';
        if (input.value != '') {
            result.forEach(recipe => {
                suggestion += `<div class="suggestion w-wull hover:bg-slate-500 flex flex-row">
                                    <p>${recipe.name}</p>
                                </div>`
            })
        }
        const sugg = document.querySelector("#suggestions")
        sugg.innerHTML = suggestion
    })
}