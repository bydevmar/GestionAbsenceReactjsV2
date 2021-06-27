import axios from "axios";

export const postGroupe = (id_admin, designation , annee , filier) => {

  return new Promise((resolve, reject) => {
    var data = JSON.stringify({
      "designation": designation,
      "annee": annee,
      "filier": filier
    });

    var config = {
      method: 'post',
      url: 'http://127.0.0.1:3001/api/groupes/'+ id_admin,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
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