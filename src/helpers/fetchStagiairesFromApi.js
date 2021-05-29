import axios from "axios";


export const fetchStagiairesFromApi = () => {

    return new Promise((resolve, reject) => {
        axios
        .get('http://127.0.0.1:3001/api/stagiaires')
        .then(stagiaires => {
            resolve({ stagiaires : stagiaires.data.details })
        })
    })
}

