export const recipesTemplate = (recipesData) => {
    const { image, time,  name, description, ingredients } = recipesData;
    const getRecipesCardDOM = () => {

        const article = document.createElement( 'article' );
            const cardHeader = document.createElement( 'div' );
                const img = document.createElement( 'img' );
                const timeElement = document.createElement( 'span' );
            const cardBody = document.createElement( 'div' );
                const cardTitle = document.createElement( 'h3' );
                const cardContainer = document.createElement( 'div' );
                    const descriptionContainer = document.createElement( 'div' );
                        const descriptionTitle = document.createElement( 'h4' );
                        const descriptionContent = document.createElement( 'p' );
                    const ingredientsContainer = document.createElement( 'div' );
                        const ingredientsTitle = document.createElement( 'h4' );
                        const ingredientsContent = document.createElement( 'div' );


        img.setAttribute("src",`assets/images/recipes/${image}`)
        img.setAttribute("alt", name)
        timeElement.textContent = `${time}min`;
        cardTitle.textContent = name;
        descriptionTitle.textContent = "RECETTE";
        descriptionContent.textContent = description;
        ingredientsTitle.textContent = "INGREDIENTS";
        ingredients.forEach(ingredient => {

            const ingredientDOM = document.createElement( 'ul' );
                const name = document.createElement( 'li' );
                const quantity = document.createElement( 'li' );
                    const quantityNb = document.createElement( 'span' );
                    const quantityUnit = document.createElement( 'span' );

            name.textContent = ingredient.ingredient;
            quantityNb.textContent = ingredient.quantity;
            quantityUnit.textContent = ingredient.unit;

            quantity.appendChild(quantityNb);
            // if 
            ingredient.unit && quantity.appendChild(quantityUnit);
            ingredientDOM.appendChild(name);
            ingredientDOM.appendChild(quantity);
            ingredientsContent.appendChild(ingredientDOM);
        });

        cardHeader.appendChild(img);
        cardHeader.appendChild(timeElement);
        descriptionContainer.appendChild(descriptionTitle);
        descriptionContainer.appendChild(descriptionContent);
        ingredientsContainer.appendChild(ingredientsTitle);
        ingredientsContainer.appendChild(ingredientsContent);
        cardContainer.appendChild(descriptionContainer);
        cardContainer.appendChild(ingredientsContainer);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardContainer);
        article.appendChild(cardHeader);
        article.appendChild(cardBody);

        // Add tailwindcss classes
        article.classList.add('basis-1/4', 'mx-6', 'my-9', 'bg-white', 'rounded-2xl', 'shadow-lg', 'overflow-hidden', 'flex', 'flex-col' );
            cardHeader.classList.add('relative', 'basis-1/3');
                img.classList.add('w-full', 'h-80', 'object-cover');
                timeElement.classList.add('absolute', 'top-5', 'right-6', 'bg-yellow-300', 'px-5', 'py-1', 'rounded-2xl', 'text-black',  'shadow-lg');
            cardBody.classList.add('basis-2/3', 'flex', 'flex-col', 'p-5', 'h-full');
                cardTitle.classList.add('text-2xl', 'font-["Anton"]', 'my-5');
                cardContainer.classList.add('flex', 'flex-col', 'space-y-5', 'h-full', 'overflow-hidden');
                    descriptionContainer.classList.add('basis-2/5', 'max-h-fit', 'overflow-hidden');
                    //     descriptionTitle.classList.add('text-xl', 'font-["Anton"]');
                    //     descriptionContent.classList.add('text-justify');
                    ingredientsContainer.classList.add('basis-3/5', 'h-full');
                    //     ingredientsTitle.classList.add('text-xl', 'font-["Anton"]');
                        ingredientsContent.classList.add('grid', 'grid-cols-2', 'gap-2', 'py-5');
                

        
        return (article);
    }
    return { image, time,  name, description, ingredients, getRecipesCardDOM }
}