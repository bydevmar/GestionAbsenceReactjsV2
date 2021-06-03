import axios from "axios";

export const postFilierByAdmin = (id_admin, designation , niveau) => {

  return new Promise((resolve, reject) => {
    var data = JSON.stringify({
      "designation": designation,
      "niveau" : niveau
    });

    var config = {
      method: 'post',
      url: 'http://127.0.0.1:3001/api/filiers/' + id_admin,
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