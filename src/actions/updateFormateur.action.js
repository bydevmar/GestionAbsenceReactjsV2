export const updateFormateurAction = ( formateur ) => {
    return {
        type : "ToUpdateFormateur",
        payload : formateur
    }
}

export const deleteFormateurToUpdateAction = () => {
    return {
        type : "DeleteFormareurToUpdate"
    }
}