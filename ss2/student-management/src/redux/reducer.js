
import {combineReducers} from 'redux'
const initState = {
    account: null
}
function userReducers(state = initState, action) {

    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                account: action.payload
            }
            break
        case "LOGOUT":
            return {
                ...state,
                account: null
            }
            break;
        default:
            return state;
    }

}

export const reducersRoot = combineReducers({
    user: userReducers
})