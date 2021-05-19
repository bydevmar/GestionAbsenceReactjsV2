let initialState = {
    user: {},
    isLogged: false
}

const authReducer = (state = initialState, action) => {
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

