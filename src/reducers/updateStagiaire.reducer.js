let initialState = {
    stagiaireToUpdate: {}
}

const updateStagiaire = (state = initialState, action) => {
    switch (action.type) {
        case "ToUpdateStagiaire":
            return {
                stagiaireToUpdate: action.payload
            }
        case "DeleteStagiaireToUpdate":
            return {
                stagiaireToUpdate: {}
            }
        default:
            return state
    }
}

export default updateStagiaire;