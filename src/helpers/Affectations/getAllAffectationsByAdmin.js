import axios from "axios";

export const getAllAffectations = (id_admin) => {

    return new Promise((resolve, reject) => {
        var config = {
            method: 'get',
            url: 'http://127.0.0.1:3001/api/affectations/'+ id_admin,
            headers: { }
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
