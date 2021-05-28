import axios from "axios";


export const fetchAbsences = (id_u) => {

    return new Promise((resolve, reject) => {
        axios
        .get('http://127.0.0.1:3001/api/absences/'+ id_u)
        .then(absences => {
            resolve({ absences : absences.data.details })
        })

        
        /*axios(config)
            .then((user) => {
                if (user.data.status === "OK") {
                    resolve({ user: user.data.details })
                } else {
                    reject({ user: {} })
                }
            }).catch((error)=>{
                console.log("Fetch user Error axios!!!");
                reject({ user: {} })
            })*/
    })
}

