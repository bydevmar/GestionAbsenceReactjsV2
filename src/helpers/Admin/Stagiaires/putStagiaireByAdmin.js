import axios from "axios";

export const putStagiaireByAdmin = (id_gestionnaire ,id_stagiaire ,numinscription , nom, prenom, groupe) => {

    return new Promise((resolve, reject) => {
        var data = JSON.stringify({
            "numinscription": numinscription,
            "nom": nom,
            "prenom": prenom,
            "groupe": groupe
        });

        var config = {
            method: 'put',
            url: 'http://127.0.0.1:3001/api/stagiaires/'+id_gestionnaire+'/'+id_stagiaire,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    })
}