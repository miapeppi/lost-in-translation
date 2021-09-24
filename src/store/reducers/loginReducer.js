import { ACTION_LOGIN_ATTEMPTING, ACTION_LOGIN_ERROR, ACTION_LOGIN_SUCCESS } from "../actions/loginActions"

const initialState = {
    loginAttemting: false,
    loginError: ''
}

export const loginReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ACTION_LOGIN_ATTEMPTING:
            return {
                ...state,
                loginAttemting: true,
                loginError: ''
            }
        case ACTION_LOGIN_SUCCESS:
            return {
                ...initialState
            }
        case ACTION_LOGIN_ERROR:
            return {
                ...state,
                loginAttemting: false,
                loginError: action.payload
            }
        default:
            return state
    }

}