export const updateAbsenceAction = ( absence ) => {
    return {
        type : "ToUpdate",
        payload : absence
    }
}


export const EmptyUpdateAction = () => {
    return {
        type : "EmptyUpdate",
        payload : ""
    }
}