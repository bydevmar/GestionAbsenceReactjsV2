import axios from "axios";

export const postStagiaire = ( id_admin , numinscription , nom , prenom , groupe ) => {

    return new Promise((resolve, reject) => {
        var data = JSON.stringify({
            "numinscription": numinscription,
            "nom": nom,
            "prenom": prenom,
            "groupe": groupe
          });
          
          var config = {
            method: 'post',
            url: 'http://127.0.0.1:3001/api/stagiaires/'+id_admin,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
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
