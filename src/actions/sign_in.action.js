export const signinAction = (user) => {
    return {
        type : "SIGN_IN",
        payload : user
    }
}