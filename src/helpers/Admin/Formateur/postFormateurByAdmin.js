import axios from "axios";

export const postFormateur = (id_admin, email, nom, prenom, matricule, cin, motdepasse) => {

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
            method: 'post',
            url: 'http://127.0.0.1:3001/api/utilisateurs/' + id_admin,
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