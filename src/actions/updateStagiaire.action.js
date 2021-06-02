export const updateStagiaireAction = ( stagiaire ) => {
    return {
        type : "ToUpdateStagiaire",
        payload : stagiaire
    }
}

export const deleteStagiaireToUpdateAction = () => {
    return {
        type : "DeleteStagiaireToUpdate"
    }
}