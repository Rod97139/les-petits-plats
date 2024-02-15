import { searchRecipesBy } from "../utils/search.js";

export const optionsTemplate = (type, App) => {
    const myArray = App.options[type]
    const $container = document.querySelector(`.select-search-${type}`)
    $container.innerHTML = ""
    
    // viderElement($container.id)
    // let liArray = document.querySelectorAll(`.select-search-${type} li`)
    // liArray && liArray.forEach(li => li.remove())
    


    const putOptionInputDOM = async () => {
        let i = 0;
        const newType = type.substring(0, type.length - 1);
        // console.log($container.textContent, 'container');
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
            optionButton.classList.add('hover:bg-amber-300', 'rounded-full', 'px-3', 'py-1', 'm-1', 'text-sm', 'label-search');
            
            optionButton.type = "button";
            optionButton.dataset.checkboxId = `${newType}-${i}`;
            optionInput.type = "checkbox";
            optionInput.setAttribute("name", `${type}[]`);
            optionInput.setAttribute("id", `${newType}-${i}`);
            optionInput.setAttribute("value", option);

            // optionInput.classList.add('hidden');

            if (App.selectedButtons.includes(optionButton.dataset.checkboxId)) {
                optionButton.classList.add('bg-amber-300', 'font-bold', 'label-search-checked');
                optionInput.checked = true;
            }

            optionButton.addEventListener('click', () => {  
                optionInput.checked = !optionInput.checked;
                optionInput.checked ? optionButton.classList.add('bg-amber-300', 'font-bold', 'label-search-checked') : optionButton.classList.remove('bg-amber-300', 'font-bold', 'label-search-checked');

                if (optionInput.checked) {
                    App.selectedButtons.push(optionButton.dataset.checkboxId)
                    
                    App.searchedRecipes = searchRecipesBy(type, optionInput.value, App)
                    App.$recipesWrapper.innerHTML = ""
                    App.options = {
                        'ingredients': [],
                        'appliances': [],
                        'ustensils': []
                    }

                    App.displayAllRecipes(App.searchedRecipes)
                    
                } else {
                    App.selectedButtons = App.selectedButtons.filter(button => button !== optionButton.dataset.checkboxId)
                    App.$recipesWrapper.innerHTML = ""
                    App.displayAllRecipes(App.recipes)
                    // App.selectedButtons.forEach(button => {
                    //     const input = document.querySelector(`input#${button}`)
                    //     input.checked = true;
                    // }
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