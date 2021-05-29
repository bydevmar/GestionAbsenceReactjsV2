import axios from "axios";


export const fetchFormateursFromApi = () => {

    return new Promise((resolve, reject) => {
        axios
        .get('http://127.0.0.1:3001/api/formateurs/609a93614f29bc1bbc6ea128')
        .then(formateurs => {
            resolve({ formateurs : formateurs.data.details })
        })
    })
}

