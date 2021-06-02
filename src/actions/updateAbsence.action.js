export const updateAbsenceAction = ( absence ) => {
    return {
        type : "ToUpdateAbsence",
        payload : absence
    }
}

export const deleteAbsenceToUpdateAction = () => {
    return {
        type : "DeleteAbsenceToUpdate"
    }
}