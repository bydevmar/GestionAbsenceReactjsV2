import authReducer from "./auth.reducer"
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    auth: authReducer,
})

export default allReducers;