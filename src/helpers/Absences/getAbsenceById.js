import axios from "axios";

export const getAbsenceByAdmin = (id_utilisateur, id_absenece) => {
    return new Promise((resolve, reject) => {
        var config = {
            method: 'get',
            url: 'http://127.0.0.1:3001/api/absences/' + id_utilisateur + '/' + id_absenece,
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