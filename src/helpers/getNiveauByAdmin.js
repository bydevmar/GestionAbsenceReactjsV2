import axios from "axios";

export const getNiveauByAdmin = (id_admin, id_niveau) => {
    return new Promise((resolve, reject) => {
        var config = {
            method: 'get',
            url: 'http://127.0.0.1:3001/api/niveau/' + id_admin + '/' + id_niveau,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    })
}