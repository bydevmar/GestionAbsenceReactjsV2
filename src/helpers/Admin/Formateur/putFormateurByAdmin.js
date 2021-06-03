import axios from "axios";

export const putFormateurByAdmin = (id_admin ,id_formateur ,email , nom, prenom, matricule,cin, motdepasse) => {

    return new Promise((resolve, reject) => {
        var data = JSON.stringify({
            "email": email,
            "nom": nom,
            "prenom": prenom,
            "matricule": matricule,
            "cin": cin,
            "motdepasse": motdepasse,
            "type": "Formateur"
          });
          
          var config = {
            method: 'put',
            url: 'http://127.0.0.1:3001/api/utilisateurs/'+id_admin+'/'+id_formateur,
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