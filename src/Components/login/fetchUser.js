import axios from "axios";


export const fetchUser = (userEmail, userPassword, callback) => {

    var config = {
        method: 'post',
        url: 'http://127.0.0.1:3001/api/utilisateur',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "email": "elhadiri@gmail.com",
            "motdepasse": "12345678z"
        }
    };

    axios(config)
        .then((user) => {
            if (user.data.status === "OK") {
                callback({user : user.data.details})
            }else {
                callback({user : {}})
            }
        })
}






