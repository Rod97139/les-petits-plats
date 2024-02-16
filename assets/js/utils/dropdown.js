export const dropdown = (App) => {

    const types = ['ingredients', 'appliances', 'ustensils']

    types.forEach(type => {

        const ulToDrop = document.querySelector(`.select-search-${type}`)

        const container = ulToDrop.parentElement
        const button = container.querySelector('button')

        button.addEventListener('click', () => {
            container.classList.toggle('max-h-[4.5rem]')
            ulToDrop.classList.toggle('hidden')
            
        })
    })
}
