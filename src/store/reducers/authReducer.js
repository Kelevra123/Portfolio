import {LOGIN} from "../actions/auth";

const initialState = {
    token: null,
    expiresIn: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN :
            return {
                ...state,
                token: action.token,
                expiresIn: action.expiresIn
            }
        default: return state
    }
}
