import axios from "axios";


export const getAllNiveaux = (id) => {

    return new Promise((resolve, reject) => {
        axios
        .get('http://127.0.0.1:3001/api/niveaux/'+id)
        .then(result  => {
            resolve(result.data.details)
        })
        .catch(err =>{
            reject(err);
        })
    })
}

