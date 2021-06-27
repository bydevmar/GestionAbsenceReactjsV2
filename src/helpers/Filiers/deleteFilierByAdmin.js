import axios from "axios";

export const deleteFilierByAdmin = (id_admin, id_filier ) => {

    return new Promise((resolve, reject) => {
          axios.delete('http://127.0.0.1:3001/api/filiers/'+id_admin+'/'+id_filier)
          .then(function (response) {
            resolve(response.data);
          })
          .catch(function (error) {
            reject(error);
          });
    })
}
