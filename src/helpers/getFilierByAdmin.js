import axios from "axios";

export const getFilierByAdmin = (id_admin, id_filier) => {
    return new Promise((resolve, reject) => {
        var config = {
            method: 'get',
            url: 'http://127.0.0.1:3001/api/filier/' + id_admin + '/' + id_filier,
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