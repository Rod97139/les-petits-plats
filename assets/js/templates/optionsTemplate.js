import { searchRecipes } from "../utils/search.js";

export const optionsTemplate = (type, App) => {
    const myArray = App.options[type]
    const $container = document.querySelector(`.select-search-${type}`)

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
            optionButton.classList.add('hover:bg-amber-300', 'rounded-full', 'px-3', 'py-1', 'm-1', 'text-sm', 'label-search');
            optionButton.type = "button";
            optionButton.dataset.checkboxId = `${newType}-${i}`;
            optionInput.type = "checkbox";
            optionInput.setAttribute("name", `${type}[]`);
            optionInput.setAttribute("id", `${newType}-${i}`);
            optionInput.setAttribute("value", option);

            // optionInput.classList.add('hidden');

            optionButton.addEventListener('click', () => {  
                optionInput.checked = !optionInput.checked;
                optionInput.checked ? optionButton.classList.add('bg-amber-300', 'font-bold', 'label-search-checked') : optionButton.classList.remove('bg-amber-300', 'font-bold', 'label-search-checked');

                if (optionInput.checked) {
                    App.searchedRecipes = searchRecipes('', optionInput.value, App)
                    App.$recipesWrapper.innerHTML = ""
                    App.displayAllRecipes(App.searchedRecipes)
                    
                } else {
                    App.$recipesWrapper.innerHTML = ""
                    App.displayAllRecipes(App.recipes)
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