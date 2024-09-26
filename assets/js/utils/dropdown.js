export const dropdown = () => {

    const types = ['ingredients', 'appliances', 'ustensils']

    types.forEach(type => {

        const ulToDrop = document.querySelector(`.select-search-${type}`)
        const container = ulToDrop.parentElement
        const button = container.querySelector('button')

        button.addEventListener('click', () => {
            container.classList.toggle('max-h-[3.5rem]')
            container.classList.toggle('max-h-[20rem]')
            // ulToDrop.classList.toggle('hidden')
            button.classList.toggle('open')
        })
    })
}
