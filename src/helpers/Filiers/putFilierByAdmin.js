import axios from "axios";

export const putFilierByAdmin = (id_admin ,id_filier ,designation , niveau) => {

    return new Promise((resolve, reject) => {
        var data = JSON.stringify({
            "designation": designation,
            "niveau": niveau
          });
          
          var config = {
            method: 'put',
            url: 'http://127.0.0.1:3001/api/filiers/'+id_admin+'/'+id_filier,
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