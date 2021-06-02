import authReducer from "./auth.reducer"
import { combineReducers } from 'redux'
import updateAbsence from "./updateAbsence.reducer";
import updateStagiaire from "./updateStagiaire.reducer";

const allReducers = combineReducers({
    auth: authReducer,
    updateAbsence : updateAbsence,
    updateStagiaire : updateStagiaire
})

export default allReducers;