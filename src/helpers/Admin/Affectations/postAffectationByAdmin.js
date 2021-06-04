import axios from "axios";

export const postAffectation = (id_admin , formateur , groupe) => {
  return new Promise((resolve, reject) => {
    var data = JSON.stringify({
      "formateur": formateur,
      "groupe" : groupe
    });

    var config = {
      method: 'post',
      url: 'http://127.0.0.1:3001/api/affectations/' + id_admin,
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