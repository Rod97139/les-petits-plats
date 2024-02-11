export const recipesTemplate = (recipesData) => {
    const { image, time,  name, description, ingredients } = recipesData;
    const getRecipesCardDOM = () => {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const timeElement = document.createElement( 'span' );
        const cardHeader = document.createElement( 'div' );
        const cardBody = document.createElement( 'div' );
        const cardTitle = document.createElement( 'h3' );
        const descriptionTitle = document.createElement( 'h4' );
        const descriptionContent = document.createElement( 'p' );
        const ingredientsTitle = document.createElement( 'h4' );
        const ingredientsContainer = document.createElement( 'div' );
        img.setAttribute("src",`assets/images/recipes/${image}`)
        img.setAttribute("alt", name)
        timeElement.textContent = time;
        cardTitle.textContent = name;
        descriptionTitle.textContent = "RECETTE";
        descriptionContent.textContent = description;
        ingredientsTitle.textContent = "INGREDIENTS";

        cardHeader.appendChild(img);
        cardHeader.appendChild(timeElement);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(descriptionTitle);
        cardBody.appendChild(descriptionContent);
        cardBody.appendChild(ingredientsTitle);
        ingredients.forEach(ingredient => {
            const ingredientContainer = document.createElement( 'ul' );
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
            ingredientContainer.appendChild(quantity);
            ingredientContainer.appendChild(name);
            ingredientsContainer.appendChild(ingredientContainer);
        });

        cardBody.appendChild(ingredientsContainer);
        article.appendChild(cardHeader);
        article.appendChild(cardBody);

        article.classList.add('basis-1/4', 'mx-6', 'my-9', 'bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'flex-col');
        cardHeader.classList.add('relative', 'basis-1/3');
        cardBody.classList.add('basis-2/3');
        img.classList.add('w-full', 'h-80', 'object-cover');

        timeElement.classList.add('absolute', 'top-5', 'right-0');
        
        return (article);
    }
    return { image, time,  name, description, ingredients, getRecipesCardDOM }
}