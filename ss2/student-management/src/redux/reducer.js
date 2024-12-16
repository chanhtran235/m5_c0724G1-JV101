
import {combineReducers} from 'redux'
const initState = {
    account: null
}
function userReducer(state = initState, action) {

    switch (action.type) {

        case "LOGIN":
            console.log("----------login----------");
            console.log(action.payload)
            return  {
                ...state,
                account: action.payload
            }
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
    user: userReducer
})