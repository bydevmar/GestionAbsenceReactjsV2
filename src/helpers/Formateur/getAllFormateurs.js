import axios from "axios";

export const getAllFormateurs = (id_admin) => {
    return new Promise((resolve, reject) => {
        axios
        .get('http://127.0.0.1:3001/api/formateurs/' + id_admin)
        .then(formateurs => {
            resolve({ formateurs : formateurs.data.details })
        })
    })
}