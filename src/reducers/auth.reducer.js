import Cookies from "js-cookie"

let initialState = {
    user: {},
    isLogged: false
}


const authReducer = (state = initialState, action) => {
    if(Cookies.get("logged") !== undefined){
        initialState = {
            user: (JSON.parse(Cookies.get("logged"))).user,
            isLogged: (JSON.parse(Cookies.get("logged"))).isLogged
        }
    }
    switch (action.type) {
        case "SIGN_IN":
            return {
                user: action.payload,
                isLogged: action.islogged
            }
        case "SIGN_OFF":
            return {
                user: {},
                isLogged: action.islogged
            }
        default:
            return state
    }
}

export default authReducer;

