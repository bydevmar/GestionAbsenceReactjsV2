import axios from "axios";

export const getAllGroupes = (id) => {

    return new Promise((resolve, reject) => {
        axios
        .get('http://127.0.0.1:3001/api/groupes/'+id)
        .then(groupes => {
            resolve({ groupes : groupes.data.details })
        })
        .catch(err => {
            reject(err);
        })
    })
}

