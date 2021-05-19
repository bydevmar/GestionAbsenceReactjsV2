export const signInAction = ( user ) => {
    return {
        type : "SIGN_IN",
        payload : user,
        islogged : true
    }
}
export const signOffAction = ( user ) => {
    return {
        type : "SIGN_OFF",
        payload : user ,
        islogged : false
    }
}