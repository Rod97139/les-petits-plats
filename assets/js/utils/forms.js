export const formListener = () => {
    const FiltersForm = document.querySelector("#filters")

    console.log(document.querySelectorAll("#filters input"));
    document.querySelectorAll("#filters .label-search").forEach(input => {
        input.addEventListener("click", () => {
            // on intercepte les clics
            // on récupère les datas
            console.log("change")
            const Form = new FormData(FiltersForm)
    
            // on fabrique l'url
            const Params = new URLSearchParams()
            
            Form.forEach((value, key) => {
                if (value != '') {
                    Params.append(key, value)
                }
                
            })

            console.log(Params);
        })
    })
}
   