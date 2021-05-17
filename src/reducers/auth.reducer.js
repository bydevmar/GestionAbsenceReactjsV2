const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return action.payload
        case "SIGN_OFF":
            return {}
        default:
            return state
    }
}

export default authReducer;

