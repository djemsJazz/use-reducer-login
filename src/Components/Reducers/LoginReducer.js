
export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT = 'LOGOUT'
export const FIELD_CHANGE = 'FIELD_CHANGE'


export function loginReducer(state, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoading: true,
                error: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false
            }
        case LOGIN_ERROR:
            return {
                ...state,
                isAuthenticated: false,
                isLoading: false,
                error: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                username: '',
                setPassword: ''
            }
        case FIELD_CHANGE:
            return {
                ...state,
                [action.field]: action.value
            }
        default:
            return state
    }
}