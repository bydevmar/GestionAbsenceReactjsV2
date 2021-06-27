import axios from "axios";

export const getStagiaireById = (id_admin, id_stagiaire) => {
    return new Promise((resolve, reject) => {
        var config = {
            method: 'get',
            url: 'http://127.0.0.1:3001/api/stagiaire/' + id_admin + '/' + id_stagiaire,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                resolve(response.data.details);
            })
            .catch(function (error) {
                reject(error);
            });
    })
}