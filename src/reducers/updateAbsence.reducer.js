let initialState = {
    absenceToUpdate : ""
}

const updateAbsence = (state = initialState, action) => {
    switch (action.type) {
        case "ToUpdate":
            return {
                absenceToUpdate : action.payload
            }
        default:
            return state
    }
}

export default updateAbsence;