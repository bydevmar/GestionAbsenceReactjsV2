import axios from "axios";


export const getGroupeByAdmin = (id_admin, id_groupe) => {

    return new Promise((resolve, reject) => {
        axios
            .get('http://127.0.0.1:3001/api/groupe/' + id_admin + "/" + id_groupe)
            .then(result => {
                resolve(result.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
