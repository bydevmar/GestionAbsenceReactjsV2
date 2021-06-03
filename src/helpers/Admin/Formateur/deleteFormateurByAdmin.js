import axios from "axios";

export const deleteFormateurByAdmin = ( id_admin , id_formateur ) => {

    return new Promise((resolve, reject) => {
        var config = {
            method: 'delete',
            url: 'http://127.0.0.1:3001/api/utilisateurs/'+id_admin+'/'+id_formateur,
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

