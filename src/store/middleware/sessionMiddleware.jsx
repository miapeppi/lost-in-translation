import { ACTION_SESSION_INIT, ACTION_SESSION_SET, sessionSetAction } from "../actions/sessionActions"

export const sessionMiddleware = ({ dispatch }) => next => action => {

    next(action)

    if(action.type === ACTION_SESSION_INIT) {
        const storedSession = localStorage.getItem('rlit-ss')

        if(!storedSession) {
            return 
        }
        const session = JSON.parse(storedSession)
        console.log("session:", session)
        console.log("session[0]:", session[0])
        dispatch(sessionSetAction(session[0]))
    }

    if(action.type === ACTION_SESSION_SET){
        localStorage.setItem('rlit-ss', JSON.stringify(action.payload))
    }
}