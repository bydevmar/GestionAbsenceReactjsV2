import authReducer from "./auth.reducer"
import { combineReducers } from 'redux'
import updateAbsence from "./updateAbsence.reducer";

const allReducers = combineReducers({
    auth: authReducer,
    updateAbsence : updateAbsence
})

export default allReducers;