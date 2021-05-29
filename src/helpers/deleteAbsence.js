import axios from "axios";


export const deleteAbseence = ( id_utilisateur , id_absence ) => {

    return new Promise((resolve, reject) => {
        axios
        .delete('http://127.0.0.1:3001/api/absences/'+ id_utilisateur + "/" + id_absence)
        .then(operation => {
            resolve( operation )
        })
        .catch((error)=>{
            reject(error)
        })
    })

}

