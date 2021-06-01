let initialState = {
    absenceToUpdate : ""
}

const updateAbsence = (state = initialState, action) => {
    switch (action.type) {
        case "ToUpdate":
            return {
                absenceToUpdate : action.payload
            }
        case "EmptyUpdate":
            return {
                absenceToUpdate : ""
            }
        default:
            return state
    }
}

export default updateAbsence;