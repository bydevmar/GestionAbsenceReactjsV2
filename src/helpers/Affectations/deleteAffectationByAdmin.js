import axios from "axios";

export const deleteAffectationByAdmin = (id_admin, id_affectation ) => {

    return new Promise((resolve, reject) => {
          axios.delete('http://127.0.0.1:3001/api/affectations/'+id_admin+'/'+id_affectation)
          .then(function (response) {
            resolve(response.data);
          })
          .catch(function (error) {
            reject(error);
          });
    })
}
