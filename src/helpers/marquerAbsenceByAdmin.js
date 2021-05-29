import axios from "axios";


export const marquerAbsenceByAdmin= ( gestionnaire , stagiaire , formateur , dateabsence , heuredebut , heurefin ) => {

    return new Promise((resolve, reject) => {
        var data = JSON.stringify({
            "stagiaire": stagiaire,
            "formateur": formateur,
            "dateabsence": dateabsence,
            "heuredebut": dateabsence + "T" + heuredebut,
            "heurefin": dateabsence + "T" + heurefin
          });
          
          var config = {
            method: 'post',
            url: 'http://127.0.0.1:3001/api/absences/'+gestionnaire,
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
