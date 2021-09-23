export const ACTION_LOGIN_ATTEMPTING = '[login] ATTEMPT'
export const ACTION_LOGIN_SUCCESS = '[login] SUCCESS'
export const ACTION_LOGIN_ERROR = '[login] ERROR'

export const loginAttemptAction = username => ({
    type: ACTION_LOGIN_ATTEMPTING,
    payload: username
})

export const loginSuccessAction = profile => ({
    type: ACTION_LOGIN_SUCCESS,
    payload: profile
})

export const loginErrorAction = error => ({
    type: ACTION_LOGIN_ERROR,
    payload: error
})