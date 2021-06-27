import axios from "axios";


export const getAllStagiaires = (id_u) => {

    return new Promise((resolve, reject) => {
        axios
        .get('http://127.0.0.1:3001/api/stagiaires/'+ id_u)
        .then(stagiaires => {
            resolve({ stagiaires : stagiaires.data.details })
        })
    })
}

