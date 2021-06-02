let initialState = {
    absenceToUpdate: {}
}

const updateAbsence = (state = initialState, action) => {
    switch (action.type) {
        case "ToUpdateAbsence":
            return {
                absenceToUpdate: action.payload
            }
        case "DeleteAbsenceToUpdate":
            return {
                absenceToUpdate: {}
            }
        default:
            return state
    }
}

export default updateAbsence;