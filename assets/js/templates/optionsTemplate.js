import { searchRecipesBy } from "../utils/search.js";

export const optionsTemplate = (type, App) => {
    const myArray = App.options[type]
    const $container = document.querySelector(`.select-search-${type}`)
    $container.innerHTML = ""
    const tagSearchInput = document.createElement('input')
    $container.appendChild(tagSearchInput);
    const $labelSearchContainerByType = document.querySelector(`.label-search-${type}`)
    $labelSearchContainerByType.innerHTML = ""
    tagSearchInput.setAttribute("type", "search");
    tagSearchInput.classList.add('mx-1','w-[180px]', 'p-2', 'rounded', 'border', 'border-gray-300', 'mb-2', 'text-sm', 'focus:outline-none', 'focus:border-gray-600', 'placeholder-gray-500');
    tagSearchInput.setAttribute("id", `tag-search-${type}`);
    tagSearchInput.addEventListener('keyup', (e) => {
        const input = e.target.value.toLowerCase()
        const optionsButtons = $container.querySelectorAll('button')
        optionsButtons.forEach(button => {
            if (button.textContent.toLowerCase().includes(input)) {
                button.classList.remove('hidden')
            } else {
                button.classList.add('hidden')
            }
        })
    })
    



    const putOptionInputDOM = async () => {
        let i = 0;
        const newType = type.substring(0, type.length - 1);
        myArray.forEach(option => {
            i++;
            const optionLi = document.createElement( 'li' );
                const optionButton = document.createElement( 'button' );
                const optionLabel = document.createElement( 'label' );
                    const optionInput = document.createElement( 'input' );
                    
            optionLabel.setAttribute("for", `${newType}-${i}`);
            optionLabel.classList.add('hidden');
            // // optionLabel.setAttribute("tabindex", `${i}`);
            // optionLabel.setAttribute("role", `button`);
            // optionLabel.setAttribute("aria-pressed", `false`);
            // optionLabel.setAttribute("aria-labelledby", `${newType + i}`);
            optionLabel.textContent = option;
            // tabindex="0" role="button" aria-pressed="false" aria-labelledby="checkbox-label-1"
            optionButton.textContent = option;
            optionButton.classList.add('hover:bg-amber-300', 'px-3', 'py-1', 'text-sm', 'label-search', 'w-full', 'text-left');
            optionButton.type = "button";
            optionButton.dataset.checkboxId = `${newType}-${i}`;
            optionInput.type = "checkbox";
            optionInput.setAttribute("name", `${type}[]`);
            optionInput.setAttribute("id", `${newType}-${i}`);
            optionInput.setAttribute("value", option);

            if (App.selectedButtons[type].includes(optionButton.textContent.toLocaleLowerCase())) {
                optionButton.classList.add('bg-amber-300', 'font-bold', 'label-search-checked');
                optionInput.checked = true;
                const newLabelbutton = optionButton.cloneNode(true)
                $labelSearchContainerByType.appendChild(newLabelbutton)

                console.log(newLabelbutton.className);
                newLabelbutton.classList.remove('label-search-checked')
                newLabelbutton.classList.add('label-tag-checked', 'rounded-xl', 'h-[40px]')
                console.log(newLabelbutton.className);
            }

            
            optionButton.addEventListener('click', () => {  
                optionInput.checked = !optionInput.checked;
                optionInput.checked ? optionButton.classList.add('bg-amber-300', 'font-bold', 'label-search-checked') : optionButton.classList.remove('bg-amber-300', 'font-bold', 'label-search-checked');
                if (optionInput.checked) {
                    App.selectedButtons[type].push(optionButton.textContent.toLocaleLowerCase())
                    searchRecipesBy(type, optionInput.value, App)
                } else {

                    // FormData
                    // const Form = new FormData(FiltersForm)
                    // const Params = new URLSearchParams(Form)
                    // let ParamsArray = []
                    // for (let i = 0; i < 3; i++) {
                    //     const type = Object.keys(App.options)[i]
                    //     ParamsArray[Object.keys(App.options)[i]] = Params.getAll(Object.keys(App.options)[i] + '[]')                        
                    //     console.log(ParamsArray[Object.keys(App.options)[i]], 'ParamsArray[Object.keys(App.options)[i]]');
                    //     const ul = document.querySelector(`.select-search-${type}`)
                    //     const optionsButtons = ul.querySelectorAll('button')
                    //     optionsButtons.forEach(button => {
                    //         if (ParamsArray[type].includes(button.textContent.toLocaleLowerCase())) {
                    //             button.classList.add('bg-amber-300', 'font-bold', 'label-search-checked')
                    //         }
                    //     })
                    // }
                    App.selectedButtons[type] = App.selectedButtons[type].filter(button => button !== optionButton.textContent.toLocaleLowerCase())
                    console.table(App.selectedButtons);
                    App.$recipesWrapper.innerHTML = ""
                    App.displayAllRecipes(App.recipes)
                    App.searchedRecipes = App.recipes
                    App.$totalRecipes.textContent = App.recipes.length
                    const textInput = document.querySelector("#text-search-form input")
                    if (textInput.value != '') {
                        App.options =  {
                            'ingredients': [],
                            'appliances': [],
                            'ustensils': []
                        }
                        App.searchedRecipes = App.recipes.filter(recipe => recipe.searchKeyWords.toLowerCase().includes(textInput.value.toLowerCase()))
                        App.$recipesWrapper.innerHTML = ""
                        App.displayAllRecipes(App.searchedRecipes)
                        
                    }
                    for (let i = 0; i < 3; i++) {
                        App.selectedButtons[Object.keys(App.options)[i]].forEach(button => {
                            searchRecipesBy(Object.keys(App.options)[i], button, App)
                        })
                    }
                    App.$totalRecipes.textContent = App.searchedRecipes.length
                    App.searchedRecipes.length === 1 ? document.querySelector('.total-recipes + span').textContent = 'recette' : document.querySelector('.total-recipes + span').textContent = 'recettes'
                }
            });



            optionLabel.appendChild(optionInput);
            // optionLabel.appendChild(optionButton);
            optionLi.appendChild(optionButton);
            optionLi.appendChild(optionLabel);
            $container.appendChild(optionLi);
        });
    }
    
    return { myArray, $container, putOptionInputDOM }
}