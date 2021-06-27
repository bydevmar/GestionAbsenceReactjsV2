import axios from "axios";


export const deleteGroupeByAdmin = (id_admin, id_groupe ) => {

    return new Promise((resolve, reject) => {
          axios.delete('http://127.0.0.1:3001/api/groupes/'+id_admin+'/'+id_groupe)
          .then(function (response) {
            resolve(response.data);
          })
          .catch(function (error) {
            reject(error);
          });
    })
}
