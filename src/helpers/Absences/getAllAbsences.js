import axios from "axios";


export const getAllAbsences = (id_u) => {

    return new Promise((resolve, reject) => {
        axios
        .get('http://127.0.0.1:3001/api/absences/'+ id_u)
        .then(absences => {
            resolve({ absences : absences.data.details })
        }).catch((error)=>{
            console.log("Error while getting 'absences'!!!");
            reject( error )
        })

    })
}

