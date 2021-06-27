import axios from "axios";

export const deleteNiveauByAdmin = (id_admin, id_niveau ) => {

    return new Promise((resolve, reject) => {
          axios.delete('http://127.0.0.1:3001/api/niveaux/'+id_admin+'/'+id_niveau)
          .then(function (response) {
            resolve(response.data);
          })
          .catch(function (error) {
            reject(error);
          });
    })
}
