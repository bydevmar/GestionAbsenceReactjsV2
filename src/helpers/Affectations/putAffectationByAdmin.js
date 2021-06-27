import axios from "axios";

export const putAffectationByAdmin = (id_admin ,id_affectation ,formateur , groupe) => {

    return new Promise((resolve, reject) => {
        var data = JSON.stringify({
            "formateur": formateur,
            "groupe": groupe
          });
          
          var config = {
            method: 'put',
            url: 'http://127.0.0.1:3001/api/affectations/'+id_admin+'/'+id_affectation,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
    })
}