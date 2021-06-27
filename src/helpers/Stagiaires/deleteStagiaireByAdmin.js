import axios from "axios";

export const deleteStagiaireByAdmin = ( id_admin , id_stagiaire ) => {

    return new Promise((resolve, reject) => {
        var config = {
            method: 'delete',
            url: 'http://127.0.0.1:3001/api/stagiaires/' + id_admin + '/' + id_stagiaire,
            headers: { }
          };
          axios(config)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error)
          });
    })
}