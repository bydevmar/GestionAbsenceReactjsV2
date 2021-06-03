import axios from "axios";

export const postNiveau = (id_admin, designation) => {

  return new Promise((resolve, reject) => {
    var data = JSON.stringify({
      "designation": designation
    });

    var config = {
      method: 'post',
      url: 'http://127.0.0.1:3001/api/niveaux/' + id_admin,
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