import axios from "axios";


export const fetchUserFromApi = (userEmail, userPassword) => {

    var config = {
        method: 'post',
        url: 'http://127.0.0.1:3001/api/utilisateur',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "email": userEmail,
            "motdepasse": userPassword
        }
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then((user) => {
                if (user.data.status === "OK") {
                    resolve({ user: user.data.details })
                } else {
                    reject({ user: {} })
                }
            }).catch((error)=>{
                console.log("Fetch user Error axios!!!");
                reject({ user: {} })
            })
    })
}






